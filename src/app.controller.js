import {connectDB} from './DB/connection.js'
import authcontroller from './modules/auth/auth.controller.js'
import usercontroller from './modules/user/user.controller.js'
import { globalErrorHandling } from '../utils/error/error.handling.js'
import messageController from './modules/message/message.controller.js'
const bootstrap = (app, express) => {
    app.use(express.json())

    app.get('/', (req, res, next) => {
        res.send('hello world')
    })

    app.use('/auth', authcontroller) 
app.use('/user',usercontroller)
app.use('/message',messageController)
app.use(globalErrorHandling)
    app.all('*', (req, res, next) => {
        res.status(404).send({ message: "not found" })
    })
    connectDB()
}

export default bootstrap