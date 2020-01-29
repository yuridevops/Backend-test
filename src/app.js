const express = require('express')
const routes = require('./routes');


const app = express()


// Habilitar o plugin para tratar o conteúdo do body como JSON
app.use(express.json())

app.use(routes)

module.exports = app

