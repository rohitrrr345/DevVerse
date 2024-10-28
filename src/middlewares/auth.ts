import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User, IUser } from "../models/User.js"; // Make sure User is correctly imported
import ErrorHandler from "../utils/errorHandler.js"; // Make sure this is imported as well
import { TryCatch } from './error.js';

// Extend Express Request type to include `user`
interface AuthenticatedRequest extends Request {
  user?: IUser; // Use IUser type here for better clarity
}

export const isAuthenticated = TryCatch(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler(401, "Not Logged In"));

  // Decode the token and define the type of decoded
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  // Fetch the user and handle the possibility of null
  const user = await User.findById(decoded._id).exec(); // Use exec() to return a Promise
  if (!user) return next(new ErrorHandler(401, "User not found")); // Handle case where user doesn't exist

  req.user = user; // Now this is guaranteed to be an IUser instance
  next();
});
