import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { SessionService } from '../auth/session.service';
import type { AuthUser } from '../common/decorators';
import { CurrentUser, RequirePermissions } from '../common/decorators';
import { Permission } from '../common/rbac/permissions';
import {
  CreateUserDto,
  ListUsersDto,
  UpdateProfileDto,
  UpdateRoleDto,
  UpdateStatusDto,
} from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly users: UsersService,
    private readonly session: SessionService,
  ) {}

  @Get('me')
  me(@CurrentUser() user: AuthUser) {
    return this.users.me(user.id);
  }

  @Patch('me')
  async updateMe(
    @CurrentUser() user: AuthUser,
    @Body() dto: UpdateProfileDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { profile, tokenVersion } = await this.users.updateProfile(
      user.id,
      dto,
    );
    // El cambio de contraseña invalida todas las sesiones; a quien lo hizo
    // se le renueva la suya para que no tenga que volver a entrar.
    if (dto.newPassword) {
      await this.session.start(response, { id: user.id, tokenVersion });
    }
    return profile;
  }

  @Get('instructors')
  instructors() {
    return this.users.listInstructors();
  }

  @Post()
  @RequirePermissions(Permission.UserManage)
  create(@Body() dto: CreateUserDto) {
    return this.users.create(dto);
  }

  @Get('stats')
  @RequirePermissions(Permission.ReportPlatform)
  stats() {
    return this.users.platformStats();
  }

  @Get()
  @RequirePermissions(Permission.UserManage)
  list(@Query() query: ListUsersDto) {
    return this.users.list(query);
  }

  @Get(':id')
  @RequirePermissions(Permission.UserManage)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.users.findOne(id);
  }

  @Patch(':id/role')
  @RequirePermissions(Permission.UserManage)
  updateRole(
    @CurrentUser() actor: AuthUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateRoleDto,
  ) {
    return this.users.updateRole(actor, id, dto.role);
  }

  @Patch(':id/status')
  @RequirePermissions(Permission.UserManage)
  updateStatus(
    @CurrentUser() actor: AuthUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateStatusDto,
  ) {
    return this.users.updateStatus(actor, id, dto.isActive);
  }
}
