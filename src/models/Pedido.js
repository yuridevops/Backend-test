const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    cliente: {
        type:  mongoose.Schema.Types.ObjectId,
        required: [true,'Cliente é obrigatório']
    },
    dataCadastro:{
        type:Date,
        default:Date.now
    },
    dataAtualizacao:{
        type:Date
    },
    produtos: [{
        idProduto: mongoose.Schema.Types.ObjectId,
        descricao: String,
        quantidade: Number,
        preco: Number
    }, required = [true, 'É necessario pelo menos um produto']]
});

module.exports = mongoose.model('Pedido', PedidoSchema);