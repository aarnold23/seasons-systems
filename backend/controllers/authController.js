import logger from '../utils/logger.js';
import { authService } from '../container.js';

export default {
  async login(req, res, next) {
    const { name, password } = req.body;

    try {
      const result = await authService.authenticate(name, password);

      if (!result.success) {
        logger.error(result.error);
        return res.status(401).json({ error: result.error });
      }

      res.json({ token: result.token, user: result.user });
      logger.info(`User ${result.user.name} logged in successfully`);
      return undefined;
    } catch (error) {
      return next(error);
    }
  }
};
