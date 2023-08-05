"use client";

import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { videoProps, videoData } from "@/utils/videoData";

export interface VideoContextInterface {
  videos: videoProps[]; // Update to an array of videoProps
  setVideos: Dispatch<SetStateAction<videoProps[]>>; // Update to work with the array
}

const defaultState: VideoContextInterface = {
  videos: videoData, // Make sure videoData is an array of videoProps
  setVideos: () => {},
};

export const VideoContext = createContext(defaultState);

type VideoProviderProps = {
  children: ReactNode;
};

const getInitialState = () => {
  const videos = sessionStorage.getItem("videos");
  return videos ? JSON.parse(videos) : videoData; // Use videoData as the initial state
};

export default function VideoProvider({ children }: VideoProviderProps) {
  const [videos, setVideos] = useState<videoProps[]>(getInitialState); // Update the type to an array of videoProps

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}
