import { NextFunction } from 'express';
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import crypto from "crypto";
 
interface IFavouriteCourse{
    course:mongoose.Schema.Types.ObjectId;
    poster:string;
}
interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    avatar:string;
    role: "user" | "admin";
    FavouriteCourse:IFavouriteCourse[];
    createdAt:Date;
    getJWTToken:()=>string;
    resetPasswordToken: string;
    resetPasswordExpire: Date;
    comparePassword:(password:string)=>Promise<boolean>;
    getResetToken: () => string;
    

}
  const schema=new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[8,"Password must of length of 8 characters"],
    },
    avatar:{
        public_id:{
            type:String,
            required:true,

        },
        url:{
            type:String,            
            required:true,
        },
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    },
    FavouriteCourse:[
        {
            course:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Course',
            },
            poster:String,
        
    },
],
     createdAt:{
         type:Date,
         default:Date.now,
     },
       resetPasswordToken:String,
       resetPasswordExpire: Date,

  },{
      timestamps:true,
  })
  schema.pre<IUser>('save', async function (next:NextFunction) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  schema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, "process.env.JWT_SECRET" as string, {
      expiresIn: "15d",
    });
  };
  
  schema.methods.comparePassword = async function (password:string):Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  };
  schema.methods.getResetToken = function ():string {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };
  
  

    export const User=mongoose.model<IUser>("User",schema)