const Pedido = require('../models/Pedido');

exports.create = async (body) => {
    return await Pedido.create(body)
}

exports.showAll = async () =>{
    return await Pedido.find({})
}

exports.edit = async(body) => {
    body.dataAtualizacao = Date.now()
    return await Pedido.findByIdAndUpdate(body.id, body)
}

exports.del = async(body) =>{
    return await Pedido.findByIdAndDelete(body.id)
}