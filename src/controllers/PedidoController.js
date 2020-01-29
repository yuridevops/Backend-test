const repository = require('../repositories/pedido-repository')


exports.create = async (req, res) => {
    await repository.create(req.body)
        .then(data => {
            res.status(201).send(data)
        }).catch(e => {
            res.status(400).send({
                message: 'Cliente é obrigatório'
            })
        })
}

exports.showAll = async (req, res) => {
    await repository.showAll()
        .then(data => {
            res.status(200).send({
                message: "Sucesso",
                lista: data
            })
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao buscar pedidos',
                data: error
            })
        })
}

exports.edit = (req, res) => {
        repository.edit(req.body)
        .then(data => {
            res.status(200).send({ message: 'Pedido alterado com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Id não foi informado',
                data: error
            })
        })
}


exports.del = (req, res) => {
    repository.del(req.body)
        .then(data => {
            res.status(200).send({ message: 'Pedido excluido com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao excluir pedido',
                data: error
            })
        })
}
