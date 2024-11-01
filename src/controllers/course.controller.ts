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
export const getallCourses:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
   const keyword=req.query.keyword || "";
   const category=req.query.category || "";
   const courses=await Course.find({
    title:{
        $regex:keyword,
        $options:"i",
    },
    category:{
        $regex:category,
        $options:"i",
    }

   }).select("-pdfs");


     res.status(201).json({
         success: true,
         message: courses,
       }); 
       
 
     
 
    
 });
 


export const addPdfs:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
    const {id}=req.params;
    const {title,description}=req.body;
    const course=await Course.findById(id);
    if(!course)  return next(new ErrorHandler("Course Not found",404));
    // const file=req.file;
    // const fileUri=getDataUri(file);
    // const mycloud =await cloudinary.v2.uploader.upload(fileUri.content,{
    //     resource_type:"pdf",
    // })
     course.pdfs.push({
        title,
        description,
        // documentArray:{
        //     public_id:mycloud.public_id,
        //     url:mycloud.secure_url,

        // }

     })
     await course.save();
     res.status(200).json({
        success: true,
        message: "Lecture added in Course",
      });
      
  
     

  
       
 
     
 
    
 });
 