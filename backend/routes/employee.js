import { Router } from 'express';
import * as employeeController from '../controllers/employeeController.js';
import auth from '../middleware/auth.js';
import role from '../middleware/role.js';
import department from '../middleware/department.js';
import {
  validateCreateEmployee,
  validateUpdateEmployee
} from '../validators/employeeValidator.js';

export const createAccountRoutes = ({ controller, guards = [] }) => {
	const router = Router();
	router.use(...guards);
	router.get('/', controller.getAll);
	router.get('/:id', controller.getById);
	router.post('/', controller.create);
	router.put('/:id', controller.update);
	router.delete('/:id', controller.remove);
	return router;
};

const router = createAccountRoutes({
	controller: employeeController,
	guards: [auth, department('HR'), role(['admin'])],
});
// departments: HR
router.get(
    '/',
    auth,
    department(['HR', 'Management']),
     role(['admin', 'manager'], {
    allowAll: ['superAdmin', 'auditor']
  }),
    employeeController.getAll
);
router.get('/:id',
       auth, 
       department(['HR', 'Management', 'Finance']),
       role(['admin']),
       employeeController.getById
    );
router.post('/', auth, department(['HR']), role(['admin']), validateCreateEmployee, employeeController.create);
router.put('/:id', auth, department(['HR']), role(['admin']), validateUpdateEmployee, employeeController.update);
router.delete('/:id', auth, department('HR'), role(['admin']), employeeController.remove);

export default router;
