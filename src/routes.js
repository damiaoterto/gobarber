import { Router } from 'express';

import UserController from './app/controllers/auth/UserController';
import SessionController from './app/controllers/auth/SessionController';

import AuthMiddleware from './app/http/middlewares/authMiddleware';
import authMiddleware from './app/http/middlewares/authMiddleware';

const route = new Router();

route.get('/', async (req, res) => {
    return res.json({ message: 'Bem-Vindo a API do Gobarber' });
});

route.post('/user', UserController.store);
route.post('/sessions', SessionController.store);

route.use(authMiddleware);

route.put('/user', UserController.update);


export default route;
