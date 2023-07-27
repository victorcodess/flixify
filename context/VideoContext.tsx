"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { videoProps, videoData } from "@/utils/videoData";

export interface VideoContextInterface {
  videos: videoProps;
  setVideos: Dispatch<SetStateAction<videoProps>>;
}

const defaultState = {
  video: videoData,
  setVideos: (videos: videoProps) => {},
} as VideoContextInterface;

export const VideoContext = createContext(defaultState);

type VideoProviderProps = {
  children: ReactNode;
};

const getInitialState = () => {
  const videos = localStorage.getItem("videos");
  return videos ? JSON.parse(videos) : defaultState;
};

export default function VideoProvider({ children }: VideoProviderProps) {
  const [videos, setVideos] = useState<videoProps>(getInitialState);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}
