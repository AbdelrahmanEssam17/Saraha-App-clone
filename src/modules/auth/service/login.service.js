import userModel from "../../../DB/model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { successResponse } from "../../../../utils/response/success.responce.js"
import { asyncHandler } from "../../../../utils/error/error.handling.js"

export const login=
asyncHandler(async(req,res,next)=>{
  
    const{email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user){
      return next(new Error("invalid account",{cause:404}))
    }
    const match=bcrypt.compareSync( password,user.password)
    if(!match){
     return next(new Error("invalid account",{cause:400}))
    }
    const token=jwt.sign({id:user._id,isLoggedIn:true},
      user.role==roleTypes.User?
      process.env.TOKEN_SIGNATURE:process.env.TOKEN_SIGNATURE_ADMIN,
      {expiresIn:"1h"})
     return successResponse({res,message:"done",status:201,data:{user:_id}})

}
) 