module.exports = ProdutoValidationSchema = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        situation:{
            type: 'string'
        },
        geometry:{
            type: 'string'
        },
        area:{
            id:{
                type: 'integer'
            }
        },
        person: {
            id:{
                type: 'integer'
            }
        }
    },
    required: ['description', 'situation','geometry','area','person']
};
