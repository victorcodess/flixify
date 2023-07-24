import React from "react";
import logo from "../public/assets/logo.svg";
import tv from "../public/assets/icon-nav-tv-series.svg";
import bkmark from "../public/assets/icon-nav-bookmark.svg";
import movie from "../public/assets/icon-nav-movies.svg";
import home from "../public/assets/icon-nav-home.svg";
import user from "../public/assets/image-avatar.png";
import Image from "next/image";

const SideBar = () => {
  return (
    <nav className="text-white bg-[#161D2F] my-0 left-0 right-0 lg:bottom-0 lg:my-auto lg:right-auto mx-auto justify-between items-center flex lg:flex-col lg:h-[90vh] w-full sm:h-[72px] h-[56px] lg:w-[96px] fixed lg:left-7 lg:top-0 sm:top-5 sm:w-[95.5%]  lg:rounded-2xl py-5 px-5 sm:px-7 lg:py-10 sm:rounded-xl">
      <Image src={logo} alt="logo" className="w-[25px] lg:w-[32px]" />

      <div className="flex gap-[24px] sm:gap-[32px] justify-center items-center lg:flex-col lg:mb-56">
        {" "}
        <Image src={home} alt="logo" className="w-[16px] sm:w-[20px]" />
        <Image src={movie} alt="logo" className="w-[16px] sm:w-[20px]" />
        <Image src={tv} alt="logo" className="w-[16px] sm:w-[20px]" />
        <Image src={bkmark} alt="logo" className="w-[13.54px] sm:w-[16.92px]" />
      </div>
      <Image
        src={user}
        alt="user"
        className="w-[24px] sm:w-[32px] lg:w-[40px] border-2 border-white rounded-full"
      />
    </nav>
  );
};

export default SideBar;
