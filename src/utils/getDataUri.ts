import DataUriParser from "datauri/parser.js";
import path from "path";
import { Express } from "express";

// Define the function with an explicit return type
const getDataUri = (file: Express.Multer.File): { content: string } => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  
  // Ensure that content is not undefined; handle undefined cases if necessary
  const dataUri = parser.format(extName, file.buffer);

  if (!dataUri || !dataUri.content) {
    throw new Error("Failed to generate Data URI");
  }

  return { content: dataUri.content }; // Now TypeScript will recognize this as `{ content: string }`
};

export default getDataUri;
