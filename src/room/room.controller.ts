import { Body, Controller, Param, Post } from '@nestjs/common';

import { RoomService } from '@/room/room.service';
import { CreateRoomDto, JoinRoomDto } from '@/room/room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    const { maxParticipants } = createRoomDto;

    return await this.roomService.createRoom(maxParticipants);
  }

  @Post(':link/join')
  async joinRoom(@Param('link') link: string, @Body() joinRoomDto: JoinRoomDto) {
    const { username } = joinRoomDto;

    return await this.roomService.joinRoom(link, username);
  }
}
