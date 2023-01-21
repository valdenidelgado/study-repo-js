const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

const customers = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;
  const id = uuidv4();

  customers.push({ id, cpf, name, statement: [] });

  console.log(customers);

  return res.status(201).send();
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
