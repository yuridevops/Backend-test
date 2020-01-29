const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type:String,
        required: [true, 'Nome Cliente é obrigatório']
    },
    dataNascimento:{
        type:Date
    },
    dataCadastro:{
        type:Date,
        default:Date.now
    },
    dataAtualizacao:{
        type:Date,
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);