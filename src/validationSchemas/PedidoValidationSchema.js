module.exports = PedidoValidationSchema = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        value:{
            type: 'string'
        },
        geometry:{
            type: 'string'
        },
        sensor: {
            id:{
                type: 'integer'
            }
        }
    },
    required: ['description', 'value','geometry','sensor']
};
