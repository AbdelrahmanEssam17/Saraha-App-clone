import {Router} from 'express'
import { updateProfile, userprofile } from './service/user.service.js'
import { authentication, authorization } from '../../middleware/auth.middleware.js'
import { endPoint } from './user.endpoint.js'
const router =Router()


router.get('/profile',authentication(),authorization(endPoint.profile),userprofile)
router.patch('/profile',updateProfile)

export default router