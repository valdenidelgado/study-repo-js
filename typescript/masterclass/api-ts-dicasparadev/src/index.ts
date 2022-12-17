import express from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";

const main = async () => {
  config();
  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const getUsersController = new GetUsersController(
      new MongoGetUsersRepository()
    );

    const { body, statusCode } = await getUsersController.handle();

    res.status(statusCode).send(body)
  });

  app.post("/users", async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();

    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body)
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

main();
