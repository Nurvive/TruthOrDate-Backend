import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Deck } from './deck.entity';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';

import { Card } from '@/card';

@Module({
  imports: [TypeOrmModule.forFeature([Deck, Card, Deck])],
  providers: [DeckService],
  controllers: [DeckController],
})
export class DeckModule {}
