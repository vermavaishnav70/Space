"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GetStartedFree = () => {
    const router = useRouter();
  return (
    <>
      <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Get started for free
        </div>
        <Button
          onClick={() => {
            router.push("/contact-me");
          }}
          className="mt-4"
        >
          {" "}
          Give us some feedback
        </Button>
        <div className="py-4 xl:w-1/3  text-center px-10">
          Never lose a great idea again. Capture, organize, and share with
          Space.
        </div>

        <Image
          src="/assets/MessyDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-80 pt-10 dark:invert dark:sepia-0 dark:brightness-100 dark:contrast-200"
        />
      </div>
    </>
  );
};

export default GetStartedFree;
