import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import checkadminMiddleware from './app/middlewares/checkadmin';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AnswerOrderController from './app/controllers/AnswerOrderController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'The node server is running on port: 3333' })
);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/students/:studentId/checkins', CheckinController.index);
routes.post('/students/:studentId/checkins', CheckinController.store);

routes.get('/students/:studentId/help-orders', HelpOrderController.index);
routes.post('/students/:studentId/help-orders', HelpOrderController.store);

routes.use(checkadminMiddleware);

routes.get('/help-orders', AnswerOrderController.index);
routes.post('/help-orders/:helpId/answer', AnswerOrderController.store);

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
