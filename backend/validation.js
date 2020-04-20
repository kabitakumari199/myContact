const Joi = require('@hapi/joi');

 
 // register validation

 const registerValidation = (data) => {
    const schema = {
      first_name:Joi
      .string()
      .required(),
      username:Joi
           .string()
           .min(6)
           .required(),
        email:Joi
           .string()
           .min(6)
           .required()
           .email(),
        password:Joi
           .string()
           .min(6)
           .required(),
       contact_no:Joi
           .string()
           .required(),
      status:Joi
           .string()
           .required()   
        
     
     }
    return Joi.validate(data,schema);
 }

 // Login validation
 const loginValidation = (data) => {
    const schema = {
      username:Joi
           .string()
           .min(4)
           .required(),
        password:Joi
           .string()
           .min(6)
           .required() 
     
     }
    return Joi.validate(data,schema);
 }

 module.exports.registerValidation = registerValidation;
 module.exports.loginValidation = loginValidation;