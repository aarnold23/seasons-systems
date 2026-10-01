import jwt from 'jsonwebtoken';
import configs from '../configs/configs.js';


const tokenService = {
    generate(user) {
        return jwt.sign(
            { id: user.employeeID,
             role: user.role,
            department: user.department 
            },
            configs.auth.jwtSecret,
            { 
            expiresIn: configs.auth.jwtExpiresIn 
        }
        );
    }
};
export default tokenService;