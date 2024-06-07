import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Participant } from '@/participant';
import { Deck } from '@/deck';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  link: string;

  @Column()
  maxParticipants: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Participant, (participant) => participant.room)
  participants: Participant[];

  @OneToOne(() => Deck, (deck) => deck.room)
  deck: Deck;
}
