import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler.js";
import { TryCatch } from "./error.js";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/User.js";

// Extending Express Request type to include `user`
interface AuthenticatedRequest extends Request {
  user?: typeof User;
}

export const isAuthenticated = TryCatch(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler(401, "Not Logged In"));

  // Use process.env.JWT_SECRET, and define decoded type
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  req.user = await User.findById(decoded._id);

  next();
});
