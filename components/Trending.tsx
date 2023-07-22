import React from "react";
import VideoCard from "./VideoCard";

const Trending = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] mt-[24px] px-5">
      <h1 className="text-white text-[20px] font-light">Trending</h1>
      <div className="flex gap-4 flex-grow">
        <VideoCard />
       
      </div>
    </div>
  );
};

export default Trending;
