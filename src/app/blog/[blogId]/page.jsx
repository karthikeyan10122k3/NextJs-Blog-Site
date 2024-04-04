import Image from "next/image";

export default function SinglePostPage() {
  return (
    <div className="container text-light">
      <div className="ms-5 d-flex postImage">
        <div className="ms-5 ">
          <Image src="/about.png" alt="image" width={400} height={500} />
        </div>
        <div className="ms-5 postInfo">
          <div className="d-flex userInfo">
            <Image src="/noavatar.png"  alt="userimage" height={32} width={32}/>
            <p>username</p>
          </div>
          <h1>Post Title</h1>
            <p>Posted Time</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo dolore dolorem? Ipsam, tenetur voluptate explicabo placeat, et, voluptatem aliquid aliquam quia molestiae id tempora eius soluta quod reprehenderit ratione?</p>

        </div>
      </div>
    </div>
  );
}
