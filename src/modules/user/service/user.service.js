import { asyncHandler } from "../../../../utils/error/error.handling.js";
import { successResponse } from "../../../../utils/response/success.responce.js";
import userModel from "../../../DB/model/user.model.js";
import jwt from 'jsonwebtoken'
export const userprofile=asyncHandler(
      async(req,res,next)=>{
return  successResponse({res,status:200,data:{
     user:req.user
}})

    }
 
) 

export const updateProfile = asyncHandler(
  async (req, res, next) => {
    if (req.body.phone) {
      req.body.phone = generateEncryption({ plainText: req.user.phone });
    }

    const user = await userModel.findByIdAndUpdate(
      req.user._id,
      req.body,
      { new: true, runValidators: true }
    );

    return successResponse({
      res,
      status: 200,
      data: { user }
    });
  }
);
