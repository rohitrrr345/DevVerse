import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
import { create } from "domain";
import { CreateCourse } from "../controllers/course.controller.js";
const router=express.Router();


//routes
   router.post('/newcourse',isAuthenticated,singleUpload,CreateCourse);
export default router;