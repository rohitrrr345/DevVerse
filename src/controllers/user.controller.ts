import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { IUser, User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";

interface AuthenticatedRequest extends Request {
  user?: IUser;
}


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
  const file = req.file;
  if (!req.user) {
    return next(new ErrorHandler( "User not found",401));
  }


  const user = await User.findById(req.user._id);

  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  user.avatar = {
    public_id: mycloud.public_id,
    url: mycloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Successfully",
  });
 });
 export const addToPlaylist:ControllerType=TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
  const user = await User.findById(req.user._id);
  
    const course = await Course.findById(req.body.id);
  
    if (!course) return next(new ErrorHandler("Invalid Course Id", 404));
  
    const itemExist = user.playlist.find((item) => {
      if (item.course.toString() === course._id.toString()) return true;
    });
  
    if (itemExist) return next(new ErrorHandler("Item Already Exist", 409));
  
    user.playlist.push({
      course: course._id,
      poster: course.poster.url,
    });
  
    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Added to playlist",
    });
 })
 export const removeFromPlaylist:ControllerType=TryCatch(async(req:Request,res:Response,next:NextFunction)=>{
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);
  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.playlist = newPlaylist;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});



 
