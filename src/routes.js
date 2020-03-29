import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import AppointmentController from './app/http/controllers/AppointmentController';
import AvaliableController from './app/http/controllers/AvaliableController';
import UserController from './app/http/controllers/auth/UserController';
import ProviderController from './app/http/controllers/ProviderController';
import SessionController from './app/http/controllers/auth/SessionController';
import ScheduleController from './app/http/controllers/ScheduleController';
import FileController from './app/http/controllers/FileController';
import NotificationController from './app/http/controllers/NotificationController';

import authMiddleware from './app/http/middlewares/authMiddleware';

const route = new Router();
const upload = multer(multerConfig);

route.get('/', async (req, res) => {
  return res.json({ message: 'welcome to GoBarber API' });
});

route.post('/user', UserController.store);
route.post('/sessions', SessionController.store);

route.use(authMiddleware);

route.put('/user', UserController.update);

route.get('/providers', ProviderController.index);
route.get('/providers/:providerId/avaliable', AvaliableController.index);

route.get('/appointments', AppointmentController.index);
route.post('/appointments', AppointmentController.store);
route.delete('/appointments/:id', AppointmentController.delete);

route.get('/schedules', ScheduleController.index);

route.get('/notifications', NotificationController.index);
route.put('/notifications/:id', NotificationController.update);

route.post('/files', upload.single('file'), FileController.store);

export default route;
