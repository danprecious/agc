"use client";
import Link from "next/link";

import { links } from "@/app/utils/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between font-semibold ">
      {links.map(({ href, name }, index) => {
        return (
          <Link
            key={name}
            href={href}
            className={`text-xs px-5  ${
              href == pathname ? "text-amber-900 font-bold" : "text-stone-500"
            } `}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
