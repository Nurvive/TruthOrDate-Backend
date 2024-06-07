import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Room } from '@/room/room.entity';
import { RoomModule } from '@/room/room.module';
import { Participant } from '@/participant';
import { DeckModule } from '@/deck';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const userName = configService.get('DB_USER');
        const userPassword = configService.get('DB_PWD');
        const dbHost = configService.get('DB_HOST');
        const dbPort = configService.get('DB_PORT');
        const dbName = configService.get('DB_NAME');

        return {
          type: 'postgres',
          host: dbHost,
          port: dbPort,
          username: userName,
          password: userPassword,
          database: dbName,
          entities: [Room, Participant],
          synchronize: true,
        };
      },
    }),
    RoomModule,
    DeckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
