import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
import { create } from "domain";
import { addPdfs, CreateCourse, getallCourses, getPdfDocuments } from "../controllers/course.controller.js";
import { get } from "http";
const router=express.Router();


//routes
   router.post('/newcourse',isAuthenticated,singleUpload,CreateCourse);
   router.post('/addocument/:id',isAuthenticated,singleUpload,addPdfs);

   router.get('/allCourses',isAuthenticated,getallCourses);
   router.get('/getPdf/:id',isAuthenticated,getPdfDocuments);
export default router;