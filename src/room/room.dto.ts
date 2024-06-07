import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateRoomDto {
  @IsInt()
  @Min(1)
  maxParticipants: number;
}

export class JoinRoomDto {
  @IsString()
  @Length(1, 50)
  username: string;
}
