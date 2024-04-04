import PostCard from "@/components/postCard/PostCard";
import blogStyle from "./blog.module.css";

export default function BlogPage() {
  return (
    <div className="container ">
      <div className={blogStyle.postCards}>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
        <div className={blogStyle.individualCard}>
          <PostCard />
        </div>
      </div>
    </div>
  );
}
