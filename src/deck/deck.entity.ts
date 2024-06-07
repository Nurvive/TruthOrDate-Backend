import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Card } from '@/card';
import { Participant } from '@/participant';
import { Room } from '@/room/room.entity';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  cardsCount: number;

  @OneToMany(() => Card, (card) => card.deck)
  cards: Card[];

  @OneToOne(() => Participant, (participant) => participant.deck)
  owner?: Participant;

  @OneToOne(() => Room, (room) => room.deck)
  room?: Room;
}
