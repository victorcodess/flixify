import React from "react";
import VideoCard from "./VideoCard";

const Trending = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] sm:mt-[34px] px-5">
      <h1 className="text-white text-[20px] sm:text-[32px] font-light">Trending</h1>
      <div className="flex gap-4 flex-grow">
        <VideoCard />
       
      </div>
    </div>
  );
};

export default Trending;
