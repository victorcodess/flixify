"use client";

import user from "../public/assets/image-avatar.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLink";
import { useSelectedLayoutSegment } from "next/navigation";
import ThemeButton from "./ThemeButton";
import { signOut, useSession } from "next-auth/react";

const SideBar = () => {
  let segment = useSelectedLayoutSegment();
  const { data: session } = useSession();


  return (
    <nav className="text-white z-30 bg-[#5A698F] dark:bg-[#161D2F] my-0 left-0 right-0 lg:bottom-0 lg:my-auto lg:right-auto mx-auto justify-between items-center flex lg:flex-col lg:h-[90vh] w-full sm:h-[72px] h-[56px] lg:w-[96px] fixed lg:left-7 lg:top-0 sm:top-5 sm:w-[95.5%]  lg:rounded-2xl py-5 px-5 sm:px-7 lg:py-10 sm:rounded-xl">
      <Link href="/">
        <div className="w-[25px] h-[25px] cursor-pointer lg:w-[32px] lg:h-[32px]">
          <svg
            className="fill-current text-[#650101] dark:text-[#FC4747]"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" />
          </svg>
        </div>
      </Link>

      <div className="flex gap-[24px] sm:gap-[32px] lg:flex-col lg:mb-56 items-center justify-center lg:items-center lg:justify-center">
        <Link href="/">
          <div className="w-4 h-4 sm:w-5 sm:h-5">
            <svg
              className={`nav-icon fill-current ${
                !segment
                  ? "text-[#E0E3EB] dark:text-white"
                  : "text-[#161D2F] dark:text-[#5A698F]"
              }  hover:text-[#650101] dark:hover:text-[#FC4747] cursor-pointer`}
              viewBox="0 0 20 20" // Add viewBox attribute
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
            </svg>
          </div>
        </Link>
        <NavLinks
          href={"/movies"}
          d={
            "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
          }
        />
        <NavLinks
          href={"/tv-series"}
          d={
            "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
          }
        />
        <NavLinks
          href={"/bookmark"}
          d={
            "M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
          }
        />
      </div>
      <div className="flex gap-[24px] sm:gap-[32px] lg:flex-col items-center justify-center lg:items-center lg:justify-center">
        <Image
          src={user}
          alt="user"
          className="w-[24px] cursor-pointer sm:w-[32px] lg:w-[40px] border-2 border-white rounded-full"
          onClick={() => signOut()}
        />
        {/* <ThemeButton /> */}
      </div>
    </nav>
  );
};

export default SideBar;
