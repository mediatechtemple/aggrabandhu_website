// components/Layout.js
"use client"
import { useRouter } from 'next/navigation';
 
import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }) {


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Only show Header and Footer if logged in */}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
