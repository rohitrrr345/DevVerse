import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";

export const register:ControllerType = TryCatch(async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    // const avatar = req.file as Express.Multer.File | undefined;  
      if (!name || !email || !password ) {
        return next(new ErrorHandler("Please add all the fields",400));
    }

    await User.create({
        name,
        email,
        password,
        avatar:"jakgjsfjknkjzgsjv",
        path:"kjsgbvzekvk"
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
});
export const login:ControllerType = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler( "Please add all the fields",400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid email or password",401));

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ErrorHandler( "Invalid credentials",401));

  sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

export const logout:ControllerType = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
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
});
export const MyProfile=TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
  const user =await User.findById(req.user._id);
  res.status(200).json({
    success:true,
    user,
  })
});
export const changePassword =TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
  const user =await User.findById(req.user._id);
 
});

