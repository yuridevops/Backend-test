module.exports = ClienteValidationSchema = {
    type: 'object',
    properties: {
        description: {
            type: 'string'
        },
        person: {
            id:{
                type: 'integer'
            }
        }
    },
    required: ['description', 'person']
};

