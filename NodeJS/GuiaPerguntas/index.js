const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
// Database
connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

// estou dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rotas
app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC'] // Para orgarnizar por id, decrescente
        ]}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
     });
});

app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta !== undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            });
        } else {
            res.redirect('/');
        }
    })
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});