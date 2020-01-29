const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    descricao: {
        type:String,
        required:true
    },
    preco: {
        type:Number,
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    },
    dataAtualizacao:{
        type:Date
    }

});

module.exports = mongoose.model('Produto', ProdutoSchema);