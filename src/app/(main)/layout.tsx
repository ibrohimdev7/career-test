import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileMenu from "@/components/layout/header/mobile-menu";

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
    <>
      <Header />
      {children}
      <MobileMenu />
      <Footer />
    </>
  );
}
