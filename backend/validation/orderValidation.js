const Joi = require('joi');

const orderValidation = (data) => {
  const schema = Joi.object({
    items: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required()
      })
    ).required(),
    total: Joi.number().required(),
    deliveryOption: Joi.string().valid('delivery', 'pickup').required(),
    customerName: Joi.string().required(),
    phoneNumber: Joi.string().required()
  });

  return schema.validate(data);
};

module.exports = {
  orderValidation
};