const Cliente = require('../models/Cliente');

exports.create = async (body) => {
    return await Cliente.create(body)
}

exports.showAll = async () =>{
    return await Cliente.find({})
}

exports.getName = async(body) => {
    return await Cliente.find({ nome: new RegExp(body.nome, 'i') })
}

exports.edit = async(body) => {
    body.dataAtualizacao = Date.now()
    return await Cliente.findByIdAndUpdate(body.id, body)
}

exports.del = async(body) =>{
    return await Cliente.findByIdAndDelete(body.id)
}