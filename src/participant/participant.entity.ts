import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Room } from '@/room/room.entity';
import { Deck } from '@/deck';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @ManyToOne(() => Room, (room) => room.participants)
  room: Room;

  @OneToOne(() => Deck, (deck) => deck.owner)
  deck: Deck;
}
