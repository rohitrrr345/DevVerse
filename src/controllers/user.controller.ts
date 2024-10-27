import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";

export const register=TryCatch(async(req:Request<{},{},{}))