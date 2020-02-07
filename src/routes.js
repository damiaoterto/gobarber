import { Router } from 'express';

const route = new Router();

route.get('/teste', (req, res) => {
    return res.json({ message: 'Bem-Vindo ao GoBarber !' });
});

export default route;