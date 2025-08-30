
import { messageModel } from '../../../DB/model/message.model.js';
import { asyncHandler } from './../../../../utils/error/error.handling.js';
import userModel from './../../../DB/model/user.model.js';
import { successResponse } from './../../../../utils/response/success.responce.js';


export const sendmessage=asyncHandler(
  async  (req,res,next)=>{
const {message,recipientId}=req.body;
const user= await userModel.findOne({_id:recipientId,deleted:false})
if(!user){
    return next(new Error("invalid recipent",{cause:404}))
}
const newMessage=await messageModel.create({message,recipientId})
return successResponse({res,message:"done",status:201})
}
)