import joi from 'joi';
import { generalFields } from '../../middleware/validation.middleware.js';
import { genderTypes } from '../../DB/model/user.model.js';

console.log(Object.values(genderTypes));

export const updateProfile = joi.object().keys({
  userName: generalFields.userName,
  phone: generalFields.phone,
  gender: joi.string().valid("male", "female")
}).required();