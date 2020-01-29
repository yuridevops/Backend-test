const Cliente = require('../models/Cliente');
const mongoose = require('mongoose')

exports.create = async (body) => {
    const cliente = new Cliente(body) 
    await cliente.save()
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