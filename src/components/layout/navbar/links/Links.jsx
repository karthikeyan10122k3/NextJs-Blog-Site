"use client"
import { useState } from "react";
import NavLink from "./navLink/NavLink";

export default function Links() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];


  const session = true;
  const isAdmin = true;

  return (
    <>
      {links.map((link) => {
        return <NavLink link={link} key={link.title} />;
      })}
      {session ? (
        <>
          {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
          <button className="btn btn-outline-primary me-2">logout</button>
        </>
      ) : (
        <NavLink link={{ title: "Login", path: "/login" }} />
      )}
    </>
  );
}
