import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CardSuit, CardValue } from './card.types';

import { Deck } from '@/deck/deck.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: CardValue;

  @Column()
  suit: CardSuit;

  @ManyToOne(() => Deck, (deck) => deck.cards)
  deck: Deck;
}
