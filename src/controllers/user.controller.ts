import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";

export const register=TryCatch(async(req:Request<{},{},NewUserRequestBody>,res:Response,next:NextFunction)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
       return next(new ErrorHandler(400,"Please add all the feilds"));
    }
    const photo=req.file as Express.Multer.File[] | undefined;
    //clodinary upload
    await User.create({
        name,
        email,
        password,


    })
})
export const login=TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=req.body;
    if( !email || !password){
        return next(new ErrorHandler(400,"Please add all the feilds"))
     }
     const user= await User.findOne({email}).select("+password");
     if(!user) return next( new ErrorHandler(401,"Invalid email or password"));
     const isMatch=await user.comparePassword(password);
     if(!isMatch){
        return next(new ErrorHandler(401,"Invalid credientials"));
     }

sendToken(res,user,`Welcome back,${user.name}`,200);

    });
export const logout=TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
   

    res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
    
 
})