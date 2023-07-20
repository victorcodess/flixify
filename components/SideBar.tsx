import React from "react";
import logo from "../public/assets/logo.svg";
import Image from "next/image";

const SideBar = () => {
  return (
    <nav className="text-white bg-[#161D2F] justify-center items-center flex lg:flex-col lg:h-[960px] w-full h-[56px] lg:w-[96px]">
      <Image src={logo} alt="logo" />
    </nav>
  );
};

export default SideBar;
