import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/global.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT Job Finders",
  description: "Find IT jobs in your area",
  keywords: "IT, job, career, finder, jobs, careers, search, job search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
