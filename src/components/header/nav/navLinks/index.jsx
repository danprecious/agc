import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Partnerships",
      href: "/partnerships",
    },
    {
      name: "Services",
      href: "/services",
    },

    {
      name: "Gallery",
      href: "/gallery",
    },

    {
      name: "About",
      href: "/about-us",
    },
  ];

  return (
    <div className="flex justify-between font-semibold">
      {links.map(({ href, name }, index) => {
        return (
          <Link key={name} href={href} className="text-xs">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
