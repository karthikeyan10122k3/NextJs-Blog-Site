

import { connectDataBase } from "@/lib/connectDataBase"
import { Post } from "@/lib/models"
import { NextResponse } from "next/server"


export const GET = async (request) => {
  try {
    connectDataBase();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log("Error Occurred while Fetching Posts", err);
    return NextResponse.error("Error occurred while fetching posts");
  }
};
