const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

app.use(bodyParser.urlencoded({ extended: false }))

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

app.use('/jobs', require('./routes/jobs'))