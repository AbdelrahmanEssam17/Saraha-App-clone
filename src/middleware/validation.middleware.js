import joi from'joi'
export const validation = (schema) => {
  return (req, res, next) => {
    const validationError = schema.validate(req.body, { abortEarly: false });
    if (validationError.error) {
      return res.status(400).json({
        message: "Validation result",
        validationError:validationError.error.details
      });
    }
    next(); 
  };
};
export const generalFields = {
  id: joi.string().pattern(/^[0-9a-fA-F]{24}$/)
};