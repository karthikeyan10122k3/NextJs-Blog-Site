import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="card" style={{ width: "20rem", height: "450px" }}>
      
        <Image
          src={ post.img ? post.img : "https://images.pexels.com/photos/20723439/pexels-photo-20723439/free-photo-of-a-group-of-rams-laying-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
          className="card-img-top"
          alt="..."
          width={100}
          height={250}
        />
      
      <span>{post.createdAt.toString().slice(0, 10)}</span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <Link href={`/blog/${post.blogId}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}
