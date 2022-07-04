const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/db');

// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});