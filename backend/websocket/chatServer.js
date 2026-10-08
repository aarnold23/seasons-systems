import { WebSocketServer } from 'ws';
import logger from '../utils/logger.js';

export default class ChatServer {
  constructor(redisClient, channel = 'chat_messages') {
    this.redisClient = redisClient;
    this.channel = channel;
    this.wss = null;
    this.subscriber = null;
  }

  async start(server) {
    this.wss = new WebSocketServer({ server });
    this.subscriber = this.redisClient.duplicate();

    await this.redisClient.connect();
    await this.subscriber.connect();
    await this.subscriber.subscribe(this.channel, message => {
      this.broadcast(message);
    });

    this.wss.on('connection', ws => {
      logger.info('Client connected to WebSocket');

      ws.on('message', async message => {
        logger.info(`Received message: ${message}`);
        await this.redisClient.publish(this.channel, message.toString());
      });

      ws.on('close', () => logger.info('Client disconnected from WebSocket'));
      ws.on('error', error => logger.error(`WebSocket error: ${error.message}`));
    });
  }

  broadcast(message) {
    this.wss.clients.forEach(client => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  }

  async stop() {
    await this.subscriber?.quit();
    await this.redisClient.quit();
    this.wss?.close();
  }
}
