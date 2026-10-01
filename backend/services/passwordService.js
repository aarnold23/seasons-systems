import bcrypt from 'bcrypt';
import configs from '../configs/configs.js';


const passWordService = {
    compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    },

    hash(password) {
        return bcrypt.hash(password, configs.auth.bcryptSaltRounds);
    }
};

export default passWordService;

