"use client";

import SearchBar from "@/components/SearchBar";
import RegularCard from "../../components/RegularCard";
import { useContext, useState } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";

export default function Home() {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const [filter, setFilter] = useState("");
  const numberM = videos
    .filter(
      (video) => video.category === "Movie" && video.isBookmarked === true
    )
    .filter((video) => {
      return filter.toLowerCase() === ""
        ? video
        : video.title.toLowerCase().includes(filter.toLowerCase());
    }).length;
  const numberT = videos
    .filter(
      (video) => video.category === "TV Series" && video.isBookmarked === true
    )
    .filter((video) => {
      return filter.toLowerCase() === ""
        ? video
        : video.title.toLowerCase().includes(filter.toLowerCase());
    }).length;

  const bkMovies = videos.filter(
    (video) => video.category === "Movie" && video.isBookmarked === true
  );

  const bkTvSeries = videos.filter(
    (video) => video.category === "TV Series" && video.isBookmarked === true
  );

  return (
    <main className="pt-[72px] sm:pt-28 lg:pt-0 flex justify-center items-start w-full">
      {" "}
      <div className="w-[140px] h-[100vh] hidden lg:block"></div>
      <div className="lg:w-[87%] xl:w-[91%] w-[100%] flex flex-col justify-center items-center lg:mt-14">
        <SearchBar
          placeholder={"Search for bookmarked shows"}
          setFilter={setFilter}
        />

        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[12px] sm:mb-[24px] lg:mb-[20px] sm:mt-[34px] px-5">
          {filter.toLowerCase() === "" ? (
            <h1 className="text-white text-[20px] sm:text-[32px] font-light">
              Bookmarked Movies
            </h1>
          ) : (
            <h1 className="text-white text-[20px] sm:text-[32px] font-light">
              {`Found ${numberM} ${
                numberM === 1 ? "result" : "results"
              } for '${filter}' in Bookmarked Movies`}
            </h1>
          )}
          {!bkMovies.length ? (
            <p className="font-light text-[16px] sm:text-[24px] text-[#9CA3AF]">
              There are no bookmarked Movies.
            </p>
          ) : (
            <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
              {videos
                .filter(
                  (video) =>
                    video.category === "Movie" && video.isBookmarked === true
                )
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
          )}
        </div>

        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[12px] mb-[61px] sm:mt-[24px] lg:mt-[20px] px-5">
          {filter.toLowerCase() === "" ? (
            <h1 className="text-white text-[20px] sm:text-[32px] font-light">
              Bookmarked TV Series
            </h1>
          ) : (
            <h1 className="text-white text-[20px] sm:text-[32px] font-light">
              {`Found ${numberT} ${
                numberT === 1 ? "result" : "results"
              } for '${filter}' in Bookmarked TV Series`}
            </h1>
          )}
          {!bkTvSeries.length ? (
            <p className="font-light text-[16px] sm:text-[24px] text-[#9CA3AF]">
              There are no bookmarked TV Series.
            </p>
          ) : (
            <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
              {videos
                .filter(
                  (video) =>
                    video.category === "TV Series" &&
                    video.isBookmarked === true
                )
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
          )}
        </div>
      </div>
    </main>
  );
}
