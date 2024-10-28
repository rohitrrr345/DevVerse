import { Response } from "express";

interface User {
  getJWTToken: () => string;
}

export const sendToken = (res: Response, user: User, message: string, statusCode = 200) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none" as const, 
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
