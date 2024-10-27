import mongoose from 'mongoose';
const schema=new mongoose.Schema({
title:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},

}
);
export const Course=mongoose.model('Course',schema);