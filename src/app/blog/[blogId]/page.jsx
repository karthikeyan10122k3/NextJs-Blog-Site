

import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import { Suspense } from "react";
import axios from "axios";

const getSinglePost = async (blogId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/blog/${blogId}`);
    return response.data;
  } catch (err) {
    console.log("Error Occurred while Fetching", err);
  }
};

export const generateMetadata = async ({ params }) => {
  const { blogId } = params;
  try {
    const post = await getSinglePost(blogId);
    return {
      title: post.title,
      description: post.description,
    };
  } catch (error) {
    console.error("Error fetching single post:", error);
    return {
      title: "Error",
      description: "Failed to load post",
    };
  }
};

export default async function SinglePostPage ({ params }) {
  const { blogId } = params
  const post = await getSinglePost(blogId);

  return (
    <div className="container text-light">
      <div className="ms-5 d-flex postImage">
        
          <div className="ms-5">
            <Image src={post.img ? post.img : "https://images.pexels.com/photos/20723439/pexels-photo-20723439/free-photo-of-a-group-of-rams-laying-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="image" width={400} height={500} />
          </div>
        <div className="ms-5 postInfo">
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <h1>{post.title}</h1>
          <p>published on: {new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
