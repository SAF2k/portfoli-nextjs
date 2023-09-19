import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safwat | Personal Portfolio",
  description: "Safwat is a full-stack developer with 1 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="fixed bg-[#d26a90]  top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#542828]"></div>
        <div className="bg-[#bb8bfa] fixed bottom-[-6rem] -z-10 right-[11rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#402051]"></div>
        <div className="fixed bg-[#f5b3cb]  bottom-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#522729]"></div>
        <div className="bg-[#b784fa] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#481851]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
