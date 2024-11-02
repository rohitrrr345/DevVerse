import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, courseBody, SearchQuery } from "../types/UserTypes.js";
import { CreateCourseResponse } from "../types/course.js";
import ErrorHandler from "../utils/errorHandler.js";
import getDataUri from "../utils/getDataUri.js";
import { io } from "../app.js";
import cloudinary from 'cloudinary'
import { Course } from "../models/Course.js";

  
export const CreateCourse:ControllerType = TryCatch(async (req: Request<{}, {}, courseBody>, res: Response<CreateCourseResponse>, next: NextFunction) => {
   const {title,description,author,category}=req.body;
   const file = req.file as Express.Multer.File | undefined;  

  if (!title || !description || !author|| !category || !file){
       return next(new ErrorHandler( "Please Fill all the details",401));    
   }
   const fileUri = getDataUri(file);
   console.log("this below multer" );
 
   const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
 
    const course=Course.create({
        title,
        description,
        author,
        category,
        file:{
          public_id:mycloud.public_id,
          url:mycloud.secure_url,
      }

    })  
    res.status(201).json({
        success: true,
        message: "Course Created Successfully. You can add pdfs now.",
      }); 
      

    

   
});
export const getallCourses:ControllerType = TryCatch(async (req:Request<{}, {}, SearchQuery>, res: Response, next: NextFunction) => {
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
    const file=req.file;
    if(!file) return next(new ErrorHandler("File Not found",404));

    const fileUri=getDataUri(file);
    const mycloud =await cloudinary.v2.uploader.upload(fileUri.content,{
        resource_type:"raw",
    })
     course.pdfs.push({
        title,
        description,
        documentArray:{
            public_id:mycloud.public_id,
            url:mycloud.secure_url,

        }

     })
     await course.save();
     io.emit('notification', { message: 'PDF uploaded successfully!' });
     res.status(200).json({
        success: true,
        message: "Lecture added in Course",
      });   
 });
 export const getPdfDocuments:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
   const course=await Course.findById(req.params.id);
   if (!course) return next(new ErrorHandler("Course not found", 404));
     await course.save();
     res.status(200).json({
        success: true,
        course,
        message: "Lecture added in Course",
      });
 });
 export const downloadingDocs:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
    const course=await Course.findById(req.params.id);
    if (!course) return next(new ErrorHandler("Course not found", 404));
      course.NumberOfDownloads+=1;
      await course.save();
      res.status(200).json({
         success: true,
         course,
         message: "Downloading  will start soon ",
       });   
  });
 

 
 