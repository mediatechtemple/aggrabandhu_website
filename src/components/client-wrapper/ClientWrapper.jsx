"use client";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const pathName = usePathname();
  const hideHeaderFooter = "/aboutus";
  const shouldHideHeaderFooter = hideHeaderFooter.includes(pathName);

  return (
    <>
      <Toaster />
      {!shouldHideHeaderFooter && children}
    </>
  );
}
