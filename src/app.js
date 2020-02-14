import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // Instancia dos métodos de middlewares e rotas
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
