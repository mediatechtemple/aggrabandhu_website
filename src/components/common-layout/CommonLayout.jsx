"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const CommonLayout = ({ children }) => {
  const pathName = usePathname();

  const shouldHideHeaderFooter = ["/aboutus", "/someotherpage"].includes(
    pathName
  );

  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideHeaderFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default CommonLayout;
