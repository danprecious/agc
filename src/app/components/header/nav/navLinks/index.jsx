import Link from "next/link";

import { links } from "@/app/utils/constants";

const NavLinks = () => {
  return (
    <div className="flex justify-between font-semibold">
      {links.map(({ href, name }, index) => {
        return (
          <Link key={name} href={href} className="text-xs px-2">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
