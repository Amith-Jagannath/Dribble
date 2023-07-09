import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "../../libs/session";

import ProfileMenu from "./ProfileMenu";
import Button from "./Button";
// import { NavLinks } from '../../constants'
const NavLinks = [
  { href: "/", key: "Inspiration", text: "Inspiration" },
  { href: "/", key: "Find Projects", text: "Find Projects" },
  { href: "/", key: "Learn Development", text: "Learn Development" },
  { href: "/", key: "Career Advancement", text: "Career Advancement" },
  { href: "/", key: "Hire Developers", text: "Hire Developers" },
];
const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav
      className="flexBetween navbar
    "
    >
      <div
        className="flex-1
      flexStart gap-10
      "
      >
        <Link href="/">
          <h3 className="cursive">Flexify</h3>
        </Link>

        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter">
        {session?.user ? (
          <>
            <button className=" mx-2 flexCenter gap-3 px-4 py-3 bg-primary-purple rounded-xl text-sm font-medium max-md:w-full">
              <Link className="text-white" href="/create-project">
                share
              </Link>
            </button>
            <ProfileMenu session={session} />
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
