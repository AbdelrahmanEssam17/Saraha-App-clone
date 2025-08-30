import joi from "joi"
import { generalFields } from '../../middleware/validation.middleware.js';
//import { sendmessage } from './service/message.service';
export const sendmessage=joi.object().keys({
    message:joi.string().pattern(new RegExp(/^[0-9a-fA-F]{24}$/)).min(2).max(100000).required(),
    recipientId:generalFields.id.required()
}).required()