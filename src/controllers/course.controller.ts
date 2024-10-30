import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { IUser, User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";
import getDataUri from "../utils/getDataUri.js";
import { Express } from "express"

import cloudinary from 'cloudinary'


export const CreateCourse:ControllerType = TryCatch(async (req:Request, res: Response, next: NextFunction) => {
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
