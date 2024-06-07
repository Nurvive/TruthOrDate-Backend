import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoomGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(RoomGateway.name);

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: Socket) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('enter')
  handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket) {
    this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${JSON.stringify(message)}`);
    // client.broadcast.emit('newMessage', message);

    // Let's add a bit of humor - respond to the sender with an acknowledgement
    // client.emit('acknowledgement', 'Your message was received loud and clear!');

    return {
      message,
    };
  }

  @SubscribeMessage('qwe')
  handleMessag(client: Socket, @MessageBody() message: string) {
    this.logger.log(`Message received from client id: ${client}`);
    this.logger.debug(`Payload: ${JSON.stringify(message)}`);
    // client.broadcast.emit('newMessage', message);

    // Let's add a bit of humor - respond to the sender with an acknowledgement
    // client.emit('acknowledgement', 'Your message was received loud and clear!');

    return {
      event: 'pong',
      message: '123',
    };
  }
}
