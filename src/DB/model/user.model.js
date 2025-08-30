import mongoose,{ Schema ,model} from "mongoose";
import { roleTypes } from "../../middleware/auth.middleware.js";
//import userModel from './user.model';
const userSchema=new Schema({
username:{
    type:String,
    required:true,
    minlength:4,
    maxlength:30
},
password:{
    type:String,
    required:true,
    minlength:4,
    maxlength:100
},
email:{
    type:String,
    unique:true,
    required:true
},
phone:{
    type:String,
},
gender:{
    type:String,
    enum:['male','female'],
    default:'male',
},
confirmEmail:{
type:Boolean
},
image:String,
DOB:Date,
role:{
type:String,
enum:Object.values(roleTypes),
default:"user"
},
},{timestamps:true})
 const userModel=mongoose.models.User||model('user',userSchema)
 export default userModel
