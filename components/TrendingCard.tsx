"use client";

import Image from "next/image";
import { videoProps } from "@/utils/videoData";
import play from "../public/assets/Group 3.png";
import convertPath from "@/utils/convertPath";
import { useContext, useEffect, useState } from "react";
import { VideoContext, VideoContextInterface } from "@/context/VideoContext";
import { ModalContext, ModalContextInterface } from "@/context/ModalContext";

const TrendingCard = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  onClick,
}: videoProps) => {
  const { videos, setVideos }: VideoContextInterface = useContext(VideoContext);
  const { video, setVideo }: ModalContextInterface = useContext(ModalContext);
  const [clicked, setclicked] = useState(false);

  useEffect(() => {
    if (video?.title === title) {
      setclicked(true);
    } else {
      setclicked(false);
    }
  }, [video?.title, title]);

  const handleClick = () => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.title === title
          ? { ...video, isBookmarked: !video.isBookmarked }
          : video
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  return (
    <div className="trending relative flex-shrink-0 w-[240px] sm:w-[400px] sm:h-[230px] lg:w-[470px] h-[140px] pb-0">
      <div className="z-20 opacity-0 hidden play lg:block absolute bg-black/70  h-[140px] w-[240px] sm:w-[400px] sm:h-[230px] lg:w-[470px] rounded-lg">
        <Image
          src={play}
          alt="Play Icon"
          className="rounded-lg cursor-pointer left-0 right-0 top-0 bottom-0 mx-auto my-auto absolute w-[117px]"
          onClick={onClick}
        />
      </div>

      <div
        className="absolute z-20 cursor-pointer top-2 left-2 sm:top-4 sm:left-7 sm:w-[32px] lg:left-6 group lg:hidden"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="group-hover:opacity-100"
        >
          <circle
            opacity="0.500647"
            cx="16"
            cy="16"
            r="16"
            fill="#10141E"
            className="group-hover:fill-white group-hover:opacity-100"
          />
          <path
            d="M23.0147 16.2292L12.6912 22.1895C12.5147 22.2914 12.2941 22.1641 12.2941 21.9603L12.2941 10.0397C12.2941 9.83594 12.5147 9.70858 12.6912 9.81047L23.0147 15.7708C23.1912 15.8726 23.1912 16.1274 23.0147 16.2292Z"
            stroke="white"
            stroke-width="1.5"
            className={`${
              clicked
                ? "text-white group-hover:stroke-black group-hover:text-black"
                : "text-transparent group-hover:stroke-black"
            }  fill-current`}
          />
        </svg>
      </div>

      <div
        className="absolute z-20 cursor-pointer top-2 right-2 sm:top-4 sm:right-8 sm:w-[32px] lg:right-6 group"
        onClick={handleClick}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:opacity-100"
        >
          <g id="Group 27">
            <circle
              id="Oval"
              opacity="0.5"
              cx="16"
              cy="16"
              r="16"
              fill="#10141E"
              className="group-hover:fill-white group-hover:opacity-100"
            />
            <g id="Bookmark">
              <path
                id="Path"
                d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                className={`${
                  isBookmarked
                    ? "text-white group-hover:stroke-black group-hover:text-black"
                    : "text-transparent group-hover:stroke-black"
                }  fill-current`}
                stroke="white"
                strokeWidth="1.5"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="h-full w-full flex items-center justify-center relative">
        <div className="absolute z-10 opacity-70 rounded-lg h-[140px] w-[240px] sm:w-[400px] sm:h-[230px] lg:w-[470px] bg-gradient-to-t from-black to-transparent"></div>
        <Image
          src={convertPath(thumbnail.trending?.large ?? "")}
          width={1400}
          height={1400}
          alt={title}
          className={`h-full w-full rounded-lg bg-contain bg-center object-cover absolute`}
        />
      </div>

      <div className="absolute z-10 items-start justify-center bottom-[16px] sm:bottom-6 sm:left-6 left-[16px] flex flex-col gap-1">
        <div className="flex justify-center items-center gap-2 text-white/70 text-[12px] sm:text-[15px] font-normal">
          <h5>{year}</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
          <div className="flex justify-center items-center gap-[6px]">
            {category === "Movie" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  opacity="0.75"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  opacity="0.75"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.448 2.68865H12V12H0V2.68865H2.952L1.332 0.72163L2.268 0.0174588L4.2 2.3453L6.132 0L7.068 0.72163L5.448 2.68865ZM1.2 3.85257V10.8361H7.2V3.85257H1.2ZM10.2 8.50824H9V7.34433H10.2V8.50824ZM9 6.18041H10.2V5.01649H9V6.18041Z"
                  fill="white"
                />
              </svg>
            )}
            <h5>{category}</h5>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
          <h5>{rating}</h5>
        </div>
        <h3 className="text-white font-medium text-[15px] sm:text-[24px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TrendingCard;
