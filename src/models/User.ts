import mongoose from 'mongoose';
  const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[8,"Password must of length of 8 characters"],
    },
    avatar:{
        public_id:{
            type:String,
            required:true,

        },
        url:{
            type:String,            
            required:true,
        },
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    },
    FavouriteCourse:[
        {
            course:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Course',
            },
            poster:String,
        
    },
],
     createdAt:{
         type:Date,
         default:Date.now,
     },
       resetPasswordToken:String,
       resetPasswordExpire:String,

  },{
      timestamps:true,
  })