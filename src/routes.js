import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/auth/UserController';
import SessionController from './app/controllers/auth/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/http/middlewares/authMiddleware';

const route = new Router();
const upload = multer(multerConfig);

route.get('/', async (req, res) => {
  return res.json({ message: 'Bem-Vindo a API do Gobarber' });
});

route.post('/user', UserController.store);
route.post('/sessions', SessionController.store);

route.use(authMiddleware);

route.put('/user', UserController.update);

route.post('/files', upload.single('file'), FileController.store);

export default route;
