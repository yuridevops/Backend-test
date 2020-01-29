const repository = require('../repositories/cliente-repository')


exports.create = async (req, res, next) => {
    await repository.create(req.body)
        .then(data => {
            res.status(201).send(data)
        }).catch(e => {
            res.status(400).send({
                message: 'Nome Cliente é obrigatório'
            })
        })
       
}

exports.showAll = async (req, res, next) => {
    await repository.showAll()
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao buscar clientes',
                data: error
            })
        })
}

exports.getName = async (req, res, next) => {
    await repository.getName(req.body)
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao buscar cliente',
                data: error
            })
        })
},


exports.edit = (req, res, next) => {
        repository.edit(req.body)
        .then(data => {
            res.status(200).send({ message: 'Cliente alterado com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Id não foi informado',
                data: error
            })
        })
}


exports.del = (req, res, next) => {
    repository.del(req.body)
        .then(data => {
            res.status(200).send({ message: 'Cliente excluido com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao excluir cliente',
                data: error
            })
        })
}
