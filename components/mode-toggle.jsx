"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (<>
      <Switch checked={useTheme().resolvedTheme === "dark"} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}/> 
    </>
  );
}
