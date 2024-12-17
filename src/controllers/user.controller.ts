import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, GoogleAuthRequestBody, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { IUser, User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";
import getDataUri from "../utils/getDataUri.js";
import { Express } from "express"

import cloudinary from 'cloudinary'
import { Course } from "../models/Course.js";
import { OAuth2Client, TokenPayload } from "google-auth-library";
interface AuthenticatedRequest extends Request {
  user?: IUser;
  file?: Express.Multer.File;
}

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, 'http://localhost:5000/auth/google/callback');

export const register:ControllerType = TryCatch(async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    console.log( "this",name,email,password);
    const file = req.file as Express.Multer.File | undefined;  
    console.log("this",file);
      if (!name || !email || !password  || !file) {
        return next(new ErrorHandler("Please add all the fields",400));
    }
    console.log("this above multer" );

  const fileUri = getDataUri(file);
  console.log("this below multer" );

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

     const user=  await User.create({
        name,
        email,
        password,
        file:{
            public_id:mycloud.public_id,
            url:mycloud.secure_url,
        }
    });

   sendToken(res,user,"Registered Successfully",201);
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
  

export const googleLogin:ControllerType=  async (req: Request<{},{},GoogleAuthRequestBody>, res: Response, next: NextFunction) => {
   const {tokenId}  =req.body;
   const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });


 const payload=ticket.getPayload();
 if(!payload){
   return next(new ErrorHandler("Invalid Token",401));
 }
 const {name,email,picture}=payload;
 const googleId:TokenPayload=payload
   let user=await User.findOne({googleId});
   if(user){
    return next(new ErrorHandler("User already exists",409));
   }
   
   if(!user){

    user=await User.create({
      name,
      email,
      file:{
        url:picture,
      },
      googleId,
      authMethod:"google",//matrices is the 





     })  
     sendToken(res,user,"Registered Successfully",201);
    }
  

   }






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
export const MyProfile:ControllerType=TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }
  const user =await User.findById(req.user._id);
  res.status(200).json({
    success:true,
    user,
  })
});
export const changePassword:ControllerType =TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
 const{oldPassword,newPassword}=req.body;
 if (!oldPassword || !newPassword)
  return next(new ErrorHandler("Please enter all field", 400));
 if (!req.user) {
  return next(new ErrorHandler( "User not found",401));
}
const user = await User.findById(req.user._id).select("+password");

const isMatch = await user?.comparePassword(oldPassword);

if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));
if(!user){
  return next(new ErrorHandler( "User not found",401));

}
user.password = newPassword;

await user.save();

res.status(200).json({
  success: true,
  message: "Password Changed Successfully",
});
});
export const UpdateProfile:ControllerType =TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
  const { name, email } = req.body;
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }

    const user = await User.findById(req.user._id);
    if (!user) {
      return next(new ErrorHandler( "User not found",401));
    }
  
    if (name) user.name = name;
    if (email) user.email = email;
  
    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
    })
 });
 export const updateprofilepicture:ControllerType =TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
  const file = req.file ;
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }
  if (!file) {
    return next(new ErrorHandler( "File not found",401));
  }

  const user = await User.findById(req.user._id);
if(!user){
  return next(new ErrorHandler("User not found",401))
}
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await cloudinary.v2.uploader.destroy(user.file.public_id);

  user.file = {
    public_id: mycloud.public_id,
    url: mycloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Successfully",
  });
 });
 export const addToPlaylist:ControllerType=TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new ErrorHandler( "User not found",401));
  }


    const course = await Course.findById(req.body.id);
  
    if (!course) return next(new ErrorHandler("Invalid Course Id", 404));
  
    const itemExist = user.FavouriteCourse.find((item) => {
      if (item.course.toString() === course._id.toString()) return true;
    });
  
    if (itemExist) return next(new ErrorHandler("Item Already Exist", 409));
  
    // user.FavouriteCourse.push({
    //   course: course._id,
    //   poster: course.poster.url,
    // });
  
    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Added to playlist",
    });
 })
 export const removeFromPlaylist:ControllerType=TryCatch(async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new ErrorHandler( "User not found",401));
  }

  const course = await Course.findById(req.query.id);
  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  const newPlaylist = user.FavouriteCourse.filter((item) => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.FavouriteCourse = newPlaylist;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});



 
