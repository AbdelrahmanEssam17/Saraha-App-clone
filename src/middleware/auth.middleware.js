import jwt from 'jsonwebtoken'; 

import userModel from '../DB/model/user.model.js';
import { asyncHandler } from '../../utils/error/error.handling.js';
export const roleTypes={
    User:"user",
    Admin:"admin"
}
export const authentication = () => {
  return asyncHandler( async (req, res, next) => {
      const { authorization } = req.headers;
      if (!authorization) {
       // return res.status(400).json({ message: "authorization is required" });
       return next(new Error("authorization is required",{cause:400}))
      }
      const [Bearer, token] = authorization.split(" ");
       if (!Bearer||!token) {
      return next(new Error("authorization is required",{cause:400}))
        //  return res.status(400).json({ message: "authorization is required" });
      }
      let TOKEN_SIGNATURE = undefined;
      switch (Bearer) {
        case "Bearer":
          TOKEN_SIGNATURE = process.env.TOKEN_SIGNATURE;
          break;
        case "admin":
          TOKEN_SIGNATURE = process.env.TOKEN_SIGNATURE_ADMIN;
          break;
      }
      const decoded = jwt.verify(token, TOKEN_SIGNATURE);
      if (!decoded) {
return next(new Error("invalid token",{cause:400}))
       // return res.status(400).json({ message: "invalid token" });
      } 
      const user = await userModel.findById(decoded.id);
      if (!user) {
       // return res.status(404).json({ message: "not registered user" });
        return next(new Error("not registered user",{cause:404}))
}
      req.user = user;
      return next();

    } 
)  
      }



export const authorization = (accessRoles=[]) => {
  return asyncHandler(
    (req, res, next) => {
if(accessRoles.includes(req.user.role)){
       return next(new Error("not registered user",{cause:403}))
     
}  
      return next();
      
    }
) 
}
