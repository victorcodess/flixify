import React from "react";
import TrendingCard from "./TrendingCard";
import RegularCard from "./RegularCard";
import { videoData } from "@/utils/videoData";

const Recommended = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">
      <h1 className="text-white text-[20px] sm:text-[32px] font-light">
        Recommended for you
      </h1>
      {/* <div></div> */}
      <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {videoData
          .filter((video) => video.isTrending == false)
          .map((video, index) => {
            return (
              <RegularCard
              key={index}
              title={video.title}
              thumbnail={video.thumbnail}
              year={video.year}
              category={video.category}
              rating={video.rating}
              isBookmarked={video.isBookmarked}
              isTrending={video.isTrending}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Recommended;
