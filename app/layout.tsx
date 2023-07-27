import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SideBar from "@/components/SideBar";
import VideoProvider from "@/context/VideoContext";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flixify",
  description: "Entertainment Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <SideBar />
        <VideoProvider>
        {children}
        </VideoProvider>
      </body>
    </html>
  );
}
