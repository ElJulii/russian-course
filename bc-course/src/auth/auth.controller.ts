import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Response } from 'express';
import { Public } from '../common/decorators';
import { AUTH_LIMITS } from '../common/throttle';
import {
  GoogleLoginDto,
  LoginDto,
  RegisterDto,
  ResendVerificationDto,
  VerifyEmailDto,
} from './auth.dto';
import { AuthService, SignedIn } from './auth.service';
import { SessionService } from './session.service';

@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly session: SessionService,
  ) {}

  @Post('register')
  @Throttle(AUTH_LIMITS.register)
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Post('login')
  @Throttle(AUTH_LIMITS.login)
  @HttpCode(200)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.open(response, await this.auth.login(dto));
  }

  // Confirma el correo con el token del enlace y deja la sesión iniciada.
  @Post('verify-email')
  @Throttle(AUTH_LIMITS.verify)
  @HttpCode(200)
  async verifyEmail(
    @Body() dto: VerifyEmailDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.open(response, await this.auth.verifyEmail(dto.token));
  }

  @Post('resend-verification')
  @Throttle(AUTH_LIMITS.resend)
  @HttpCode(200)
  resendVerification(@Body() dto: ResendVerificationDto) {
    return this.auth.resendVerification(dto.email);
  }

  // Sirve para entrar y para registrarse: crea la cuenta si no existe.
  @Post('google')
  @Throttle(AUTH_LIMITS.google)
  @HttpCode(200)
  async google(
    @Body() dto: GoogleLoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.open(response, await this.auth.google(dto));
  }

  @Post('logout')
  @HttpCode(204)
  logout(@Res({ passthrough: true }) response: Response) {
    this.session.end(response);
  }

  // La sesión va en la cookie; al navegador solo se le devuelve el usuario.
  private async open(response: Response, signedIn: SignedIn) {
    await this.session.start(response, signedIn.owner);
    return { user: signedIn.user };
  }
}
