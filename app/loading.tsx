import LoadingCard from "../components/LoadingCard";
export default function Loading() {

  return (
    <main className="pt-[72px] sm:pt-28 lg:pt-0 flex justify-center items-start w-full">
      <div className="w-[140px] h-[100vh] hidden lg:block"></div>
      <div className="lg:w-[87%] xl:w-[91%] w-[100%] flex flex-col justify-center items-center lg:mt-14">
        <div
          className="bg-[#5A698F] dark:bg-[#161D2F] animate-pulse rounded-md w-[92%] sm:w-[96%] lg:w-[97%] h-[40px] sm:h-[53px]"
          style={{
            animationDuration: "1s",
          }}
        ></div>

        <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">
          <div
            className="bg-[#5A698F] dark:bg-[#161D2F] animate-pulse rounded-md w-[150px] h-[30px] sm:h-[48px]"
            style={{
              animationDuration: "1s",
            }}
          ></div>
          <div className="grid w-[100%] grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }, (_, index) => <LoadingCard key={index} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
