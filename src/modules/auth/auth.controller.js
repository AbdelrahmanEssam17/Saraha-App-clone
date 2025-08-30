import { Router } from "express";
import * as registrationservice from './service/registration.service.js'
import * as loginservice from './service/login.service.js';
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from "../auth/auth.validation.js"
const router=Router()



router.post("/signup",validation(validators.signup),registrationservice.signup)
router.patch("/confirm-email",registrationservice.confirmEmail)
router.post("/login",validation(validators.login),loginservice.login)
export default router