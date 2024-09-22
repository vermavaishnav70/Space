"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import LandingPage from "./(landing)/page";
import { usePathname } from "next/navigation";

export default function Home() {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    // Force light theme on landing page
    if (pathname === "/") {
      setTheme("light");
    }
  }, [pathname, setTheme]);

  return <LandingPage />;
}
