const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.number().integer().positive(),
    type: Joi.string().valid('benevole', 'association').required(),
    name: Joi.string().max(100).required(),
    email: Joi.string().email().max(100).required(),
    hashed_password: Joi.string().max(255).required()
});


module.exports = userSchema;
