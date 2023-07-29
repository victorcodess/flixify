"use client";

import React from "react";
import RegularCard from "./RegularCard";
import { useContext } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";

interface Filter {
  filter: string;
}

const Recommended = ({ filter }: Filter) => {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const number = videos.filter((video) => {
    return filter.toLowerCase() === ""
      ? video
      : video.title.toLowerCase().includes(filter.toLowerCase());
  }).length;

  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">
      {filter.toLowerCase() === "" ? (
        <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
          Recommended For You
        </h1>
      ) : (
        <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
          {`Found ${number} results for '${filter}'`}
        </h1>
      )}
      <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {videos
          .filter((video) => {
            return filter.toLowerCase() === ""
              ? video.isTrending === false
              : video;
          })
          .filter((video) => {
            return filter.toLowerCase() === ""
              ? video
              : video.title.toLowerCase().includes(filter.toLowerCase());
          })
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
