import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
    name:string;
    email:string;
    password:string;
    avatar:string;
}
export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void  >;
  