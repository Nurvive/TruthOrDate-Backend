import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Room } from './room.entity';

import { Participant } from '@/participant';
import { Deck } from '@/deck';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
    @InjectRepository(Participant)
    private participantsRepository: Repository<Participant>,
  ) {}

  async createRoom(maxParticipants: number): Promise<Room> {
    const room = new Room();
    room.link = uuidv4();
    room.maxParticipants = maxParticipants;

    return await this.roomsRepository.save(room);
  }

  async joinRoom(link: string, username: string): Promise<Participant> {
    const room = await this.roomsRepository.findOne({ where: { link }, relations: ['participants'] });

    if (!room) {
      throw new Error('Room not found');
    }

    if (room.participants.length >= room.maxParticipants) {
      throw new Error('Room is full');
    }
    const participant = new Participant();
    participant.username = username;
    participant.room = room;
    participant.deck = new Deck();

    return await this.participantsRepository.save(participant);
  }
}
