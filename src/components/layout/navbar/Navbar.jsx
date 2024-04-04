import Link from "next/link";
import Links from "./links/Links";

export default function Navbar() {
  return (
    <div className="mx-4">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
        <div className="col-md-3 mb-2 mb-md-0 text-light">
          <Link
            href="/"
            className="d-inline-flex text-decoration-none text-light"
          >
            Bloggers
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <Links />
        </ul>
      </header>
    </div>
  );
}
