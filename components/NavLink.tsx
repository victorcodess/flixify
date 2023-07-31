"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavLink {
  href: string;
  d: string;
}

const NavLinks = ({ href, d }: NavLink) => {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
 

  return (
    <Link href={href}>
      <div className="w-4 h-4 sm:w-5 sm:h-5">
        <svg
          className={`nav-icon fill-current ${
            active ? "text-[#E0E3EB] dark:text-white" : "text-[#161D2F] dark:text-[#5A698F]"
          } hover:text-[#650101] dark:hover:text-[#FC4747] cursor-pointer`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={d} />
        </svg>
      </div>
    </Link>
  );
};

export default NavLinks;
