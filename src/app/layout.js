import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { Loading } from "@/Loading";
import { Toaster } from "@/components/ui/sonner";
import CommonLayout from "@/components/common-layout/CommonLayout";

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
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Your website description here for SEO."
        />
        <meta
          name="keywords"
          content="web, development, nextjs, product, service"
        />
        <meta name="author" content="Your Name or Company Name" />
        <link rel="icon" href="/favicon.ico" />
       

        <title>ABSS-Agarwal Community</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={<Loading />}>
          <Toaster />
          <CommonLayout children={children} />
        </Suspense>
      </body>
    </html>
  );
}
