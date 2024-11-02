import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router=express.Router();


//routes
   router.post('/register',singleUpload,register);
   router.post('/login',login);
   router.get('/logout',isAuthenticated,logout);
export default router;