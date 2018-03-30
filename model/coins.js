const Joi = require('joi');
 
const coinSchema = {
    name: Joi.string().alphanum().min(2).max(4).required(),
    id: Joi.number().integer().min(1).max(500)
};