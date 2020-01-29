const app = require('./src/app')
const mongoose = require('mongoose');
const http = require('http')

const port = 4000
app.set('port', port)

const server = http.createServer(app)


mongoose.connect('mongodb://localhost:27017/testeBackend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

server.listen(port);