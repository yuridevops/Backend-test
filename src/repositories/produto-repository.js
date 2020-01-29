const Produto = require('../models/Produto');

exports.create = async (body) => {
    return await Produto.create(body)
}

exports.showAll = async () =>{
    return await Produto.find({})
}

exports.getDescription = async(body) => {
    return await Produto.find({ descricao: new RegExp(body.descricao, 'i') })
}

exports.edit = async(body) => {
    body.dataAtualizacao = Date.now()
    return await Produto.findByIdAndUpdate(body.id, body)
}

exports.del = async(body) =>{
    return await Produto.findByIdAndDelete(body.id)
}