
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    min:3,
    max:20
  },
  email:{
    type:String,
    required:true,
    unique:true,
    max:50
  },
  password:{ 
    type:String,
    required:true,
    min:6,
    max:20
  },
  img:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
},
{timestamps:true}
);

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  img:{
    type:String,
  },
  userId:{
    type:String,
    required:true,
  },
  blogId:{
    type:String,
    required:true,
    unique:true,
  },
},
{timestamps:true}
);

export const User = mongoose.models.users || mongoose.model("users", userSchema);
export const Post = mongoose.models.posts || mongoose.model("posts", postSchema);


