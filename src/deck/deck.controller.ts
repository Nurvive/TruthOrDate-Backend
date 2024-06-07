import { Controller, Get } from '@nestjs/common';

import { DeckService } from './deck.service';
import { Deck } from './deck.entity';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Get('')
  createStandardDeck(): Promise<Deck> {
    return this.deckService.createDeck();
  }
}
