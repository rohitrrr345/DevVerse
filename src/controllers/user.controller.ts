import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";

export const register=TryCatch(async(req:Request<{},{},NewUserRequestBody>,res:Response,next:NextFunction)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
       return next(new ErrorHandler(400,"Please add all the feilds"))
    }
    const photo=req.file as Express.Multer.File[] | undefined;
    ////clodinary upload
    await User.create({
        name,
        email,
        password,
        public_id


    })
})
export const login=TryCatch(async(req,res,next)=>{
    const {email,password}=req.body;
    if( !email || !password){
        return next(new ErrorHandler(400,"Please add all the feilds"))
     }
     const user= await User.findOne({email}).select("+password");
     if(!user) return next( new ErrorHandler(401,"Invalid email or password"));
     const isMatch=await user.comparePassword(passsword)
 
})