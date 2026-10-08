import app from './app.js';
import configs from './configs/configs.js';
import logger from './utils/logger.js';
import redisClient from './configs/redis.js';
import ChatServer from './websocket/chatServer.js';

const PORT = configs.server.port;

(async () => {
  const dbModule = await import('./models/index.js');
  const db = await dbModule.default; // Await the promise
  const { sequelize } = db;
  try {
    await sequelize.authenticate();
    logger.info('Database connected.');
    const server = app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });

    const chatServer = new ChatServer(redisClient);
    await chatServer.start(server);

  } catch (err) {
    logger.error('Something went wrong while starting the server:', err);
    process.exit(1);
  }
})();
