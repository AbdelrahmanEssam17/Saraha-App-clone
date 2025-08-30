import { Router } from "express";
import * as messageservices from './service/message.service.js'
import * as validators from './message.validation.js'
import { validation } from './../../middleware/validation.middleware.js';
const router=Router()


router.post("/",validation(validators.sendmessage),messageservices.sendmessage)
export default router;