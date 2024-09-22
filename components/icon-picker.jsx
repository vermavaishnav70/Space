"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

// Theme map for light and dark modes
const themeMap = {
  dark: Theme.DARK,
  light: Theme.LIGHT,
};

export const IconPicker = ({ onChange, children, asChild }) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || "light";
  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="w-full border-none p-0 shadow-none">
        <EmojiPicker
          height={350}
          theme={theme}
          onEmojiClick={(data) => onChange(data.emoji)}
          suggestedEmojisMode="recent"
          skinTonePickerLocation="PREVIEW"
        />
      </PopoverContent>
    </Popover>
  );
};
