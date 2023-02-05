const Joi = require('joi');
const idValidation = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required()
  });
  const { error } = schema.validate(req.query);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  next();
};

module.exports = idValidation;