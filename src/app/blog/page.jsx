
import PostCard from "@/components/postCard/PostCard";
import blogStyle from "./blog.module.css";
// import { getPosts } from "@/lib/data";
import axios from "axios";


export const metadata = {
  title: "Blog Page ",
  description: "Created for Bloggers",
};

const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/blog");
    console.log("At Blog Post:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error Occurred while Fetching", err);
  }
};


export default async function BlogPage() {
  // const fetchedPosts = await getPosts();
  const fetchedPosts = await getPosts()

  return (
    <div className="container">
      <div className={blogStyle.postCards}>
        {fetchedPosts && fetchedPosts.length > 0 ? (
          fetchedPosts.map((post) => (
            <div className={blogStyle.individualCard} key={post.id}>
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
}
