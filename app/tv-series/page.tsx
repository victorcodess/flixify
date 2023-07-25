import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Trending from "@/components/Trending";
import Recommended from "@/components/Recommended";
import RegularCard from "../../components/RegularCard";
import { videoData } from "@/utils/videoData";

export default function Home() {
  return (
    <main className="pt-[72px] sm:pt-28 lg:pt-0 flex justify-center items-start w-full">
      {" "}
      <div className="w-[140px] h-[100vh] hidden lg:block"></div>
      <div className="lg:w-[87%] xl:w-[91%] w-[100%] flex flex-col justify-center items-center lg:mt-14">
    <SearchBar placeholder={"Search for TV series"}/>

      <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">
      <h1 className="text-white text-[20px] sm:text-[32px] font-light">
        TV Series
      </h1>
      {/* <div></div> */}
      <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {videoData
          .filter((video) => video.category === "TV Series")
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
    S</div>
      </div>
    </main>
  );
}
