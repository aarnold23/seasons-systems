import logger from '../utils/logger.js';
import { authService } from '../container.js';

export default {
  async login(req, res, next) {
    const { name, password } = req.body;
    const user = await Employee.unscoped().findOne({ where: { name } });
    if (!user) {
      logger.error('Invalid credentials: User does not exist!');
      return res.status(401).json({ error: 'Invalid credentials: User does not exist!' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      logger.error('Invalid credentials: Incorrect password!');
      return res.status(401).json({ error: 'Invalid credentials: Incorrect password!' });

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
