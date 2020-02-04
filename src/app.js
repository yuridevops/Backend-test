const express = require('express')
const routes = require('./routes');


const app = express()


// Habilitar o plugin para tratar o conteúdo do body como JSON
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routes)

module.exports = app

