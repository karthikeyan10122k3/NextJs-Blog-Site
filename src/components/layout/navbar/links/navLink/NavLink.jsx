"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={link.path}
        className={
          pathName === link.path
            ? "nav-link px-2 text-decoration-underline text-light"
            : "nav-link px-2 "
        }
      >
        {link.title}
      </Link>
    </div>
  );
}
