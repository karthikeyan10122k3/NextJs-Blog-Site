import { unstable_noStore as noStore } from 'next/cache'
import { connectDataBase } from "./connectDataBase";
import { Post, User } from './models';

export const getPosts = async () => {
  connectDataBase();
  try {
    const allPosts = await Post.find();
    return allPosts;
  } catch (err) {
    console.log("Error Fetching Posts", err);
    throw err; 
  }
};

export const getSinglePost = async (blogId) => {
  connectDataBase();
  try {
    const singlePost = await Post.findOne({ blogId: blogId });
    return singlePost;
  } catch (err) {
    console.log("Error Fetching Single Post", err);
    throw err; 
  }
};

export const getUser = async () => {
  connectDataBase();
  try {
    const user = await User.find({});
    return user;
  } catch (err) {
    console.log("Error Fetching Single User", err);
    throw err; 
  }
};

export const getSingleUser = async (userId) => {
  connectDataBase();
  noStore()
  try {
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    console.log("Error Fetching User by ID", err);
    throw err; 
  }
};