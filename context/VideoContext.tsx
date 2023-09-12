"use client";

import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { VideoProps, videoData } from "@/utils/videoData";

export interface VideoContextInterface {
  videos: VideoProps[]; // Update to an array of VideoProps
  setVideos: Dispatch<SetStateAction<VideoProps[]>>; // Update to work with the array
}

const defaultState: VideoContextInterface = {
  videos: videoData, // Make sure videoData is an array of VideoProps
  setVideos: () => {},
};

export const VideoContext = createContext(defaultState);

type VideoProviderProps = {
  children: ReactNode;
};

// const getInitialState = () => {
//   const videos = sessionStorage.getItem("videos");
//   return videos ? JSON.parse(videos) : videoData; // Use videoData as the initial state
// };

export default function VideoProvider({ children }: VideoProviderProps) {
  const [videos, setVideos] = useState<VideoProps[]>(videoData); // Update the type to an array of videoProps

  useEffect(() => {
    const getInitialState = () => {
      const storedVideos = localStorage.getItem("videos");
      return storedVideos ? JSON.parse(storedVideos) : videoData;
    };

    setVideos(getInitialState());
  }, []);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}
