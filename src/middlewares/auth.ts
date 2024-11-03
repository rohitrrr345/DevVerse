import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User, IUser } from "../models/User.js"; 
import ErrorHandler from "../utils/errorHandler.js"; 
import { TryCatch } from './error.js';

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export const isAuthenticated = TryCatch(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler( "Not Logged In",401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  const user = await User.findById(decoded._id).exec(); 
  if (!user) return next(new ErrorHandler("User not found",401)); 

  req.user = user; 
  next();
});
