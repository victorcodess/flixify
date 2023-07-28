"use client";

import TrendingCard from "./TrendingCard";
import { useContext } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";

interface Filter {
  filter: string;
}

const Trending = ({ filter }: Filter) => {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);

  return (
    <>
      {filter === "" ? (
        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] sm:mt-[34px] px-5">
          <h1 className="text-white text-[20px] sm:text-[32px] font-light">
            Trending
          </h1>
          <div className="flex gap-4 items-center justify-start w-full overflow-x-scroll ">
            {videos
              .filter((video) => video.isTrending == true)
              .map((video, index) => {
                return (
                  <TrendingCard
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
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Trending;
