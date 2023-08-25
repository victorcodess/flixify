"use client";

import { useMemo } from "react";
import RegularCard from "./RegularCard";
import { useContext } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";
import { ModalContext, ModalContextInterface } from "@/context/ModalContext";

interface Filter {
  filter: string;
}

const Recommended = ({ filter }: Filter) => {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const { video, setVideo }: ModalContextInterface = useContext(ModalContext);

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      return filter.toLowerCase() === ""
        ? video.isTrending === false
        : video.title.toLowerCase().includes(filter.toLowerCase());
    });
  }, [videos, filter]);
  const number = filteredVideos.length;

  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">
      <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
        {filter.toLowerCase() === ""
          ? "Recommended For You"
          : `Found ${number} ${
              number === 1 ? "result" : "results"
            } for '${filter}'`}
      </h1>
      <div className="grid w-[100%] grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:gap-x-10 lg:gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {filteredVideos.map((video, index) => {
          return (
            <RegularCard
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
  );
};

export default Recommended;
