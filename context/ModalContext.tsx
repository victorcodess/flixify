"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { VideoProps, videoData } from "@/utils/videoData";

export interface ModalContextInterface {
  video: VideoProps | null;
  setVideo: Dispatch<SetStateAction<VideoProps | null>>;
}

const defaultState: ModalContextInterface = {
  video: videoData[0],
  setVideo: () => {},
};

export const ModalContext = createContext(defaultState);

type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalProvider({ children }: ModalProviderProps) {
  const [video, setVideo] = useState<VideoProps | null>(null);

  return (
    <ModalContext.Provider value={{ video, setVideo }}>
      {children}
    </ModalContext.Provider>
  );
}
