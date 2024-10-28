import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { ControllerType, NewUserRequestBody } from "../types/UserTypes.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/Features.js";

export const register:ControllerType = TryCatch(async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
    const { name, email, password, avatar } = req.body;

    if (!name || !email || !password || !avatar) {
        return next(new ErrorHandler(400, "Please add all the fields"));
    }

    await User.create({
        name,
        email,
        password,
        avatar
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
});
export const login:ControllerType = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler(400, "Please add all the fields"));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler(401, "Invalid email or password"));

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ErrorHandler(401, "Invalid credentials"));

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
