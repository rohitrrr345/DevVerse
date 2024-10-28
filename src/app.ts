import express from 'express'
import cors from 'cors'
import {errorMiddleware} from './middlewares/error.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import user from "./routes/user.js"
import { connectDB } from './utils/Features.js'


  dotenv.config({path: './.env',});

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;


  const app = express();
  connectDB(process.env.MONGO_URI as string)


 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true}));
app.use(morgan('dev')) 
app.use("/api/v1/user",user)


  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  

  
  app.get("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found'
    });
  });

  
  
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));