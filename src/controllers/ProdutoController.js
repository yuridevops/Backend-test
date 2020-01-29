const repository = require('../repositories/produto-repository')


exports.create = async (req, res) => {
    await repository.create(req.body)
        .then(data => {
            res.status(201).send(data)
        }).catch(e => {
            res.status(400).send({
                message: 'Descrição Produto é obrigatório'
            })
        })
}

exports.showAll = async (req, res) => {
    await repository.showAll()
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao buscar produtos',
                data: error
            })
        })
}

exports.getDescription = async (req, res) => {
    await repository.getDescription(req.body)
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao buscar produto',
                data: error
            })
        })
},


exports.edit = (req, res) => {
        repository.edit(req.body)
        .then(data => {
            res.status(200).send({ message: 'Produto alterado com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Id não foi informado',
                data: error
            })
        })
}


exports.del = (req, res) => {
    repository.deletar(req.body)
        .then(data => {
            res.status(200).send({ message: 'Produto excluido com sucesso' })
        }).catch(error => {
            res.status(400).send({
                message: 'Erro ao excluir produto',
                data: error
            })
        })
}
