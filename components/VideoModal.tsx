"use client";

import { ModalContext, ModalContextInterface } from "@/context/ModalContext";
import { useContext, useEffect, useState } from "react";

const VideoModal = () => {
  const { video, setVideo }: ModalContextInterface = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (video) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [video]);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? setOpen(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  });

  const handleClick = () => {
    setOpen(false);
    setVideo(null);
  };

  return (
    <div
      className={`${
        open ? "opacity-100 block" : "opacity-0 hidden"
      } z-30 p-6 sm:p-8 justify-center items-center fixed top-0 bottom-0 right-0 left-0 mx-auto my-auto`}
    >
      <div
        className={`${
          open ? "opacity-100 block" : "opacity-0 hidden"
        } z-30 p-6 sm:p-8 bg-[#5A698F]/70 dark:bg-black/70 justify-center items-center fixed top-0 bottom-0 right-0 left-0 mx-auto my-auto`}
        onClick={handleClick}
      ></div>
      <div
        className={`w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[810px] lg:h-[600px] z-30 p-6 sm:p-8 bg-[#5A698F] dark:bg-[#161D2F] rounded-[10px] flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto`}
      >
        <div className="flex flex-col h-[350px] sm:h-[450px] lg:h-[550px] justify-between">
          <div className="flex flex-col gap-1 items-start justify-center">
            <div className="flex justify-center items-center gap-2 dark:text-white/70 text-[#10141E]/70 text-[12px] sm:text-[15px] font-normal">
              <h5>{video?.year}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 3 3"
                className="fill-current dark:text-white/70 text-[#10141E]/70"
              >
                <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" />
              </svg>
              <div className="flex justify-center items-center gap-[6px]">
                {video?.category === "Movie" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-current dark:text-white/70 text-[#10141E]/70"
                  >
                    <path
                      opacity="0.75"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-current dark:text-white/70 text-[#10141E]/70"
                  >
                    <path
                      opacity="0.75"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.448 2.68865H12V12H0V2.68865H2.952L1.332 0.72163L2.268 0.0174588L4.2 2.3453L6.132 0L7.068 0.72163L5.448 2.68865ZM1.2 3.85257V10.8361H7.2V3.85257H1.2ZM10.2 8.50824H9V7.34433H10.2V8.50824ZM9 6.18041H10.2V5.01649H9V6.18041Z"
                    />
                  </svg>
                )}
                <h5>{video?.category}</h5>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 3 3"
                className="fill-current dark:text-white/70 text-[#10141E]/70"
              >
                <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" />
              </svg>
              <h5>{video?.rating}</h5>
            </div>
            <h3 className="dark:text-white text-[#10141E] font-normal text-[24px] sm:text-[28px] lg:text-[32px] sm:mt-[-5px]">
              {video?.title}
            </h3>
          </div>

          <div className="flex justify-center items-center pb-3 sm:pt-[20px] lg:pt-[15px]">
            <svg className="w-[350px] sm:w-[435px] lg:w-[740px] h-[5px] flex justify-center items-center">
              <line
                x1="0"
                y1="5"
                x2="750"
                y2="5"
                className="stroke-current dark:text-[#5A698F]/50 text-[#161D2F]/50"
                strokeWidth="3.5"
              />
            </svg>
          </div>

          <div className="play bg-black/70 w-[350px] h-[250px] sm:w-[435px] sm:h-[300px] lg:w-[740px] lg:h-[400px] rounded-lg">
            {video && (
              <video
                key={video?.video}
                controls
                autoPlay
                loop
                playsInline
                muted
                width={1080}
                height={1080}
                className={`h-full w-full rounded-lg bg-contain bg-center object-cover`}
              >
                <source src={video?.video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
