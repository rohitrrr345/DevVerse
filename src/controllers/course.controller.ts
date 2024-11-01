import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { IUser, User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";
import getDataUri from "../utils/getDataUri.js";
import { Express } from "express"

import cloudinary from 'cloudinary'
import { Course } from "../models/Course.js";


export const CreateCourse:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
   const {title,description,author,category}=req.body;
  if (!title || !description || !author|| !category){
       return next(new ErrorHandler( "Please Fill all the details",401));    
   }
   
    const course=Course.create({
        title,
        description,
        author,
        category,

    })  
    res.status(201).json({
        success: true,
        message: "Course Created Successfully. You can add lectures now.",
      }); 
      

    

   
});
