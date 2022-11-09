const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

// db connection
db.authenticate().then(() => {
  console.log('Database connected')
  }).catch(err => {
    console.log('Error: ' + err)
  })

// routes
app.get('/', (req, res) => {
  res.send('Hello World 2')
})