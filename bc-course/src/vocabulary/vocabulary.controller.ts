import { Controller, Get, Header } from '@nestjs/common';
import words from './top-1000.json';

// Lista de consulta libre: basta con tener sesión, no depende de cursos ni notas.
@Controller('vocabulary')
export class VocabularyController {
  @Get()
  // Contenido fijo: el navegador lo guarda y no lo vuelve a pedir en cada visita.
  @Header('Cache-Control', 'private, max-age=86400')
  list() {
    return words;
  }
}
