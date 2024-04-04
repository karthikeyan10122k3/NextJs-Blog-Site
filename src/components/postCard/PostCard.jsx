import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className="card" style={{ width: "20rem;" }}>
      <Image
        src="/about.png"
        className="card-img-top"
        alt="..."
        width={100}
        height={250}
      />
      <span>06/05/2002</span>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link href="#" className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}
