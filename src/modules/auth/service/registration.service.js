import users from "../../../DB/model/user.model.js"
import * as bcrypt from 'bcrypt'
import CryptoJS from "crypto-js"
import jwt from 'jsonwebtoken'
import { roleTypes } from "../../../middleware/auth.middleware.js"
import { emailEvent } from "../../../../utils/events/sendEmail.js"
//import expressAsyncHandler from "express-async-handler"
import { asyncHandler } from "../../../../utils/error/error.handling.js"
import { successResponse } from "../../../../utils/response/success.responce.js"



export const signup = asyncHandler(async(req,res,next)=>{
    const{username,email,password,confirmpassword,phone}=req.body






    if(password!==confirmpassword)
    {
       return next(new Error("password Mis MAth",{cause:400}))
    }
    if(await users.findOne({email})){
           return next(new Error("email exist",{cause:409}))
    }

     const encryptphone=CryptoJS.AES.encrypt(phone,process.env.ENCRYPTION_SIGNATURE)
    const hashpassword=bcrypt.hashSync(password,parseInt(process.env.SALT_ROUND))
    const {_id}=await users.create({username,phone:encryptphone,email,password:hashpassword})

  //   const emailtoken=jwt.sign({email},process.env.EMAIL_SIGNATURE)
  //  const html=`<a href='${emailtoken}'>click me</a>`
  //   await sendEmail({to:email,subject:'confirm-email',html})

emailEvent.emit("sendEmail",{email})
      return res.status(201).json({message:"signup",user:_id})
}
)

export const confirmEmail=
asyncHandler(async(req,res,next)=>{

    const {authorizaton}=req.headers
        const {email}=jwt.verify(token,process.env.EMAIL_SIGNATURE  )
    const user=await users.findByIdAndUpdate({email},{confirmEmail:true})
           return successResponse({res,message:"done",status:200,data:{user}})
   
})
 