"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 dark:bg-[#1F1F1F]">
      <Image
        src="https://raw.githubusercontent.com/adityaphasu/notion-clone/66399896e836fdf7c88a4ef8b52b1762b4754950/public/error.svg"
        height="300"
        width="300"
        alt="error"
        className="dark:hidden"
      />
      <Image
        src="https://raw.githubusercontent.com/adityaphasu/notion-clone/66399896e836fdf7c88a4ef8b52b1762b4754950/public/error-dark.svg"
        height="300"
        width="300"
        alt="error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/document">Go back</Link>
      </Button>
    </div>
  );
};
export default Error;
