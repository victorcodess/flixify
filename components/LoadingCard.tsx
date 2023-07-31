const LoadingCard = () => {
  return (
    <div className="flex-shrink-0 w-[100%]">
      <div
        className="rounded-lg animate-pulse bg-[#5A698F] dark:bg-[#161D2F] w-full h-[110px] sm:h-[140px] lg:h-[174px]"
        style={{
          animationDuration: "1s",
        }}
      ></div>

      <div className="flex flex-col gap-1 items-start justify-center sm:gap-1 mt-2">
        <div
          className="bg-[#5A698F] dark:bg-[#161D2F] animate-pulse rounded-md w-[120px] h-[18px] sm:h-[19.5px]"
          style={{
            animationDuration: "1s",
          }}
        ></div>
        <div
          className="bg-[#5A698F] dark:bg-[#161D2F] animate-pulse rounded-md w-[150px] h-[22.5px] sm:h-[27px]"
          style={{
            animationDuration: "1s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingCard;
