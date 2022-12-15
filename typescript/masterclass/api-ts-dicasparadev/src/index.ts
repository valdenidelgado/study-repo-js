import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('Hello World! Mundão doido')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
