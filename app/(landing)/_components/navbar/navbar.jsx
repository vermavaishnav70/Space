"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // import useTheme hook
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme } = useTheme(); // access current theme

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10 h-14
    sticky top-0 z-50 ${hasScrolled ? "shadow-md border-b" : ""} 
`;

  return (
    <div className={navbarClasses+" bg-background dark:bg-background"} >
      <div className="flex items-center justify-center">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
