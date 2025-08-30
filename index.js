import path from 'path'

import * as dotenv from 'dotenv'
dotenv.config({path:path.join(path.resolve(),'./src/config/.env.dev')})
console.log(process.env.PORT)



import bootstrap from './src/app.controller.js'
import express from 'express'


const port=process.env.PORT||5000
const app =express()

bootstrap(app,express)


app.listen(port,()=>{
    console.log('server is running on port 3000')
})