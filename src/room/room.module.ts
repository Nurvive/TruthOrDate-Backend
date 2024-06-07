import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Room } from './room.entity';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

import { Participant } from '@/participant';
import { Deck } from '@/deck';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Participant, Deck])],
  providers: [RoomService, RoomGateway],
  controllers: [RoomController],
})
export class RoomModule {}
