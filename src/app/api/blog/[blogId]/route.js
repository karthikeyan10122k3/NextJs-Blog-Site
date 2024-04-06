

import { connectDataBase } from "@/lib/connectDataBase";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { blogId } = params;
  try {
    connectDataBase();
    const singlePost = await Post.findOne({ blogId });
    if (!singlePost) {
      return NextResponse.error("Post not found", 404);
    }
    return NextResponse.json(singlePost);
  } catch (err) {
    console.log("Error Occurred while Fetching singlePost", err);
    return NextResponse.error("Error occurred while fetching singlePost");
  }
};

export const DELETE = async (request, { params }) => {
  const { blogId } = params;
  try {
    connectDataBase();
    await Post.deleteOne({ blogId });
    return NextResponse.json("Post Deleted Successfully");
  } catch (err) {
    console.log("Error Occurred while Deleting singlePost", err);
    return NextResponse.error("Error occurred while Deleting singlePost");
  }
};
