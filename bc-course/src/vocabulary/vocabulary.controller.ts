import { Controller, Get, Header } from '@nestjs/common';
import words from './top-1000.json';

// Lista de consulta libre: basta con tener sesión, no depende de cursos ni notas.
@Controller('vocabulary')
export class VocabularyController {
  @Get()
  // El navegador guarda la lista y en cada visita solo pregunta si cambió: con
  // el ETag la respuesta es un 304 vacío, y una corrección llega al momento.
  @Header('Cache-Control', 'private, no-cache')
  list() {
    return words;
  }
}
