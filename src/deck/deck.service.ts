import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Deck } from '@/deck/deck.entity';
import { Card } from '@/card';
import { DECK_DEFAULT_CARDS_COUNT } from '@/deck/deck.const';
import { CardSuit, CardValue } from '@/card/card.types';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async createDeck(): Promise<Deck> {
    const deck = new Deck();
    deck.cardsCount = DECK_DEFAULT_CARDS_COUNT;
    const savedDeck = await this.deckRepository.save(deck);

    const cards: Card[] = [];
    Object.values(CardValue).forEach((cardValue) => {
      Object.values(CardSuit).forEach((cardSuit) => {
        const cardEntity = new Card();
        cardEntity.value = cardValue;
        cardEntity.suit = cardSuit;
        cardEntity.deck = savedDeck;
        cards.push(cardEntity);
      });
    });

    await this.cardRepository.save(cards);

    return this.deckRepository.findOne({ where: { id: savedDeck.id }, relations: ['cards'] });
  }
}
