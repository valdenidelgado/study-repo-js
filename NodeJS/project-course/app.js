import express from "express";

class App() {
  contructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {

  }
}

export default new App().app;
