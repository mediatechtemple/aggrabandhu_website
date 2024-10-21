"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { Loading } from "@/Loading";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const shouldHideHeaderFooter = pathName === "/aboutus";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={<Loading />}>
          <Toaster />
          {!shouldHideHeaderFooter && <Navbar />}
          <main className="flex-grow">{children}</main>
          {!shouldHideHeaderFooter && <Footer />}
        </Suspense>
      </body>
    </html>
  );
}
