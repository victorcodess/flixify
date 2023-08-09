import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SideBar from "@/components/SideBar";
import VideoProvider from "@/context/VideoContext";
import Providers from "@/context/ThemeContext";
import AuthContext from "@/context/AuthContext";

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
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${outfit.className} bg-[#E0E3EB] dark:bg-[#10141E]`}>
        <AuthContext>
        <Providers>
          <VideoProvider>
            <SideBar />
            {children}
          </VideoProvider>
        </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
