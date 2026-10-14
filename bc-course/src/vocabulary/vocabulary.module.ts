import { Module } from '@nestjs/common';
import { VocabularyController } from './vocabulary.controller';

@Module({
  controllers: [VocabularyController],
})
export class VocabularyModule {}
