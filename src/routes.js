import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import checkadminMiddleware from './app/middlewares/checkadmin';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'The node server is running on port: 3333' })
);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.use(checkadminMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:planId', PlanController.update);
routes.delete('/plans/:planId', PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:registrationId', RegistrationController.update);
routes.delete('/registrations/:registrationId', RegistrationController.delete);

export default routes;
