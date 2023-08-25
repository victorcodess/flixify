import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SideBar from "@/components/SideBar";
import VideoProvider from "@/context/VideoContext";
import Providers from "@/context/ThemeContext";
import AuthContext from "@/context/AuthContext";
import VideoModal from "@/components/VideoModal";
import ModalProvider from "@/context/ModalContext";

const outfit = Outfit({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Flixify",
  description: "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages.",
  generator: "Next.js",
  colorScheme: "dark",
  openGraph: {
    title: "Flixify — Entertainment Web App",
    description:
      "Explore a vast collection of movies and TV series, bookmark your favorites, and enjoy seamless navigation across genres.",
    url: "https://flixify.victorwilliams.me/",
    siteName: "flixify.victorwilliams.me",
    images: [
      {
        url: "https://github.com/victorcodess/flixify/assets/84178696/e7b1ffb1-498e-421e-a1b0-48092068ef0c",
        width: 1200,
        height: 630,
        alt: "Flixify — Entertainment Web App",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flixify — Entertainment Web App",
    description:
      "Explore a vast collection of movies and TV series, bookmark your favorites, and enjoy seamless navigation across genres.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/victorcodess/flixify/assets/84178696/e7b1ffb1-498e-421e-a1b0-48092068ef0c",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
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
              <ModalProvider>
                <SideBar />
                <VideoModal />
                {children}
              </ModalProvider>
            </VideoProvider>
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
