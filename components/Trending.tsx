"use client";

import TrendingCard from "./TrendingCard";
import { useContext } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";
import { ModalContext, ModalContextInterface } from "@/context/ModalContext";

interface Filter {
  filter: string;
}

const Trending = ({ filter }: Filter) => {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const { video, setVideo }: ModalContextInterface = useContext(ModalContext);

  return (
    <>
      {filter === "" ? (
        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] sm:mt-[34px] px-5">
          <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
            Trending
          </h1>
          <div className="flex gap-4 sm:gap-10 items-center justify-start w-full overflow-x-scroll sm:h-[250px] h-[160px]">
            {videos
              .filter((video) => video.isTrending == true)
              .map((video, index) => {
                return (
                  <TrendingCard
                    key={index}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    video={video.video}
                    year={video.year}
                    category={video.category}
                    rating={video.rating}
                    isBookmarked={video.isBookmarked}
                    isTrending={video.isTrending}
                    onClick={() => setVideo(video)}
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
