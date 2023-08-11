import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";

const ConfirmationUI = () => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Your function to be executed after 1 second
      playerRef.current?.pause();
    }, 2000);

    // Clean up the timer when the component unmounts or when the effect changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[400px] flex flex-col items-center justify-center">
      <div className="h-[100px]">
        <Player
          src="https://lottie.host/930b358b-0b31-435f-aaa3-88ca57db05a4/sQ3L7s390v.json"
          className="w-[100px]"
          autoplay
          ref={playerRef}
        />
      </div>
      <div className=" flex flex-col text-center justify-center items-center gap-4">
        <h1 className="text-[32px] font-light leading-10 text-white">
          Your account has been created
        </h1>
        <p className="text-[15px] font-light text-[#9CA3AF]">
          Please hold on for a sec while we take you to the Login page.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationUI;