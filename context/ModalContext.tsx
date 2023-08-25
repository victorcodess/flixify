"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { videoProps, videoData } from "@/utils/videoData";

export interface ModalContextInterface {
  video: videoProps | null;
  setVideo: Dispatch<SetStateAction<videoProps | null>>;
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
  const [video, setVideo] = useState<videoProps | null>(null);

  return (
    <ModalContext.Provider value={{ video, setVideo }}>
      {children}
    </ModalContext.Provider>
  );
}
