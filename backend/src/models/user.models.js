import { Schema } from "mongoose";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userschema = new mongoose.Schema({
username: {
    type: String,
    required: true,
unique:true,
lowercase:true,
trim:true,
index:true
},
email: {
    type: String,
    required: true,
unique:true,
lowercase:true,
trim:true,

},
fullname:{
      type: String,
    required: true,
    

trim:true,
index:true
},
avatar:{
type: String,
required: true
},
coverimage:{
    type:String
},
watchhistory:
[
{
    type: Schema.Types.ObjectId,
    ref:"video"
},
],
password:{
    type:String,
    required:[true, "password is required"]
},
refreshToken:{
    type:String
}

},
{timestamps:true}
)
userschema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
        
    
        
    
    this.password = await bcrypt.hash(this.password,10)
    next()

})

userschema.methods.ispasswordcorrect = async function(password){
return await bcrypt.compare(password,this.password)
}
userschema.methods.generateaccesstoken =  function(){
   return jwt.sign(
    {
        _id : this._id,
        email : this.email,
        username: this.username,
        fullname:this.fullname
        

    },
    
    process.env.ACCESS_TOKEN_SECRET,
   {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
   },
   )
}
export const User =  mongoose.model("User",userschema)