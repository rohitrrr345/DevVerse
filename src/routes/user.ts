import express from "express";
import { googleLogin, login, logout, MyProfile, register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router=express.Router();


//routes
   router.post('/register',singleUpload,register);
   router.post('/login',login);
   router.post('/googlelogin',googleLogin);

   router.get('/logout',isAuthenticated,logout);
   router.get('/profile',isAuthenticated,MyProfile);
   
export default router;