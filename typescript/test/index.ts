import express from "express";

const app = express();

const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  const name = 'Valdeni Delgado'
  res.send(`Hello world! from ${name}`)
})

app.get('/', (req, res) => {
  const name = req.path;
  res.send(`Hello World! from ${name}`)
})

app.get('/user/:id', (req,res) => {
  const id2 = req.params.id
  res.send(`Hello World! from ${id2}`)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  
  
})
