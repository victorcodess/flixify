"use client";

import SearchBar from "@/components/SearchBar";
import RegularCard from "../../components/RegularCard";
import { useContext, useMemo, useState } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";
import { ModalContext, ModalContextInterface } from "@/context/ModalContext";

export default function Home() {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const { video, setVideo }: ModalContextInterface = useContext(ModalContext);

  const [filter, setFilter] = useState("");

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const lowerCaseFilter = filter.toLowerCase();
      return (
        (video.category === "Movie" || video.category === "TV Series") &&
        video.isBookmarked === true &&
        (lowerCaseFilter === "" ||
          video.title.toLowerCase().includes(lowerCaseFilter))
      );
    });
  }, [videos, filter]);

  const numberM = filteredVideos.filter(
    (video) => video.category === "Movie"
  ).length;
  const numberT = filteredVideos.filter(
    (video) => video.category === "TV Series"
  ).length;

  const bkMovies = filteredVideos.filter((video) => video.category === "Movie");
  const bkTvSeries = filteredVideos.filter(
    (video) => video.category === "TV Series"
  );

  return (
    <main className="pt-[72px] sm:pt-28 lg:pt-0 flex justify-center items-start w-full bg-[#E0E3EB] dark:bg-[#10141E]">
      <div className="w-[123px] h-[100vh] hidden lg:block"></div>
      <div className="lg:w-[87%] xl:w-[91%] w-[100%] flex flex-col justify-center items-center lg:mt-14">
        <SearchBar
          placeholder={"Search for bookmarked shows"}
          setFilter={setFilter}
        />

        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[12px] sm:mb-[24px] lg:mb-[20px] sm:mt-[34px] px-5">
          <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
            {filter.toLowerCase() === ""
              ? "Bookmarked Movies"
              : `Found ${numberM} ${
                  numberM === 1 ? "result" : "results"
                } for '${filter}' in Bookmarked Movies`}
          </h1>
          {!bkMovies.length ? (
            <p className="font-light text-[16px] sm:text-[24px] text-[#10141E]/70 dark:text-[#9CA3AF]">
              There are no bookmarked Movies.
            </p>
          ) : (
            <div className="grid w-[100%] grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:gap-x-10 lg:gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {bkMovies.map((video, index) => {
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
          )}
        </div>

        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[12px] mb-[61px] sm:mt-[24px] lg:mt-[20px] px-5">
          <h1 className="dark:text-white text-[#10141E] text-[20px] sm:text-[32px] font-light">
            {filter.toLowerCase() === ""
              ? "Bookmarked TV series"
              : `Found ${numberT} ${
                  numberT === 1 ? "result" : "results"
                } for '${filter}' in Bookmarked TV series`}
          </h1>
          {!bkTvSeries.length ? (
            <p className="font-light text-[16px] sm:text-[24px] text-[#10141E]/70 dark:text-[#9CA3AF]">
              There are no bookmarked TV Series.
            </p>
          ) : (
            <div className="grid w-[100%] grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:gap-x-10 lg:gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {bkTvSeries.map((video, index) => {
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
          )}
        </div>
      </div>
    </main>
  );
}
