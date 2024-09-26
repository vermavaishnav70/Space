"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useEffect } from "react";
export const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark"); // Set initial state based on current theme

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIsDark(true);
    } else {
      setTheme("light");
      setIsDark(false);
    }
  };

  return (
    <Switch
      checked={isDark}
      onCheckedChange={toggleTheme}
    />
  );
};
