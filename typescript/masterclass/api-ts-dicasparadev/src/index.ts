import express from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();
  const app = express();

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const getUsersController = new GetUsersController(
      new MongoGetUsersRepository()
    );

    const { body, statusCode } = await getUsersController.handle();

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

main();
