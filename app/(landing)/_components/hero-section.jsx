"use client";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Spinner } from "@/components/spinner";
import { SignInButton, useAuth } from "@clerk/nextjs";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "Collaboration",
    feature: "Seamless Teamwork",
    description: "Enhance team productivity with collaborative features",
    more: (
      <div
        onClick={() => window.scrollTo({ top: 5800, behavior: "smooth" })}
        className="text-purple-600 flex items-center"
      >
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div
        onClick={() => window.scrollTo({ top: 5800, behavior: "smooth" })}
        className="text-red-600 flex items-center"
      >
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos",
    more: (
      <div
        onClick={() => window.scrollTo({ top: 5800, behavior: "smooth" })}
        className="text-blue-600 flex items-center"
      >
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Docs",
    description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    more: (
      <div
        onClick={() => window.scrollTo({ top: 5800, behavior: "smooth" })}
        className="text-yellow-600 flex items-center"
      >
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="md:items-center flex flex-col bg-background text-foreground">
      <div className="font-medium 2xl:w-1/3 md:w-2/3 xl:w-1/2 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:font-medium xl:pt-14 text-center pt-6">
        Write, plan, share
      </div>

      <p className="text-2xl pt-4 text-center w-2/3 mx-auto">
        Space is the connected workspace where better, faster work happens.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        {!isLoaded && <Spinner size="lg" />}
        {!isSignedIn && isLoaded && (
          <SignInButton mode="modal">
            <Button className="py-1">
              <div className="flex items-center justify-center">
                <div className="text-lg">Get Space free</div>
                <div>
                  <PiArrowRight className="ml-2" />
                </div>
              </div>
            </Button>
          </SignInButton>
        )}
        {isSignedIn && isLoaded && (
          <Link href="/document">
            <Button className="py-1">
              <div className="flex items-center justify-center">
                <div className="text-lg">Get Space free</div>
              </div>
            </Button>
          </Link>
        )}
      </div>

      <div className="pt-10 xl:pt-20 items-center justify-center">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="Illustration of reading in a cozy environment"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80 dark:invert dark:sepia-0 dark:brightness-100 dark:contrast-200"
        />
      </div>

      {isSmallScreen ? (
        <div className="px-8">
          <div className="grid grid-cols-4 gap-4 xl:gap-6 mt-8 xl:px-0">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`flex p-1 md:p-8 cursor-pointer ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex p-1 dark:bg-[#2b2b2b] dark:md:bg-background dark:border-gray-700"
                    : "md:bg-[#f6f5f4] dark:md:bg-background rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] dark:hover:bg-[#2b2b2b]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">{tab.icon}</div>
                  <div className="font-medium text-sm xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16 w-full">
            {activeTab && (
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="w-full border p-20 xl:p-40 rounded-xl bg-[#f6f5f4] dark:bg-foreground dark:invert dark:sepia-0 dark:brightness-100 dark:contrast-200"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:my-0 w-60 h-36 ${
                activeTab === tab
                  ? "border rounded-xl pt-2 bg-white dark:bg-[#2a2a2a] shadow-md"
                  : "shadow-md rounded-xl pt-2 bg-[#f6f5f4] dark:bg-[#1a1a1a] m"
              }`}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <div className="flex flex-col text-sm mt-2">
                  <div>
                    <div
                      className={`transition-transform duration-200 ${
                        activeTab === tab ? "transform translate-y-2" : ""
                      }`}
                    >
                      {tab.description}
                    </div>
                  </div>

                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className="md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="w-full p-20 xl:p-40 shadow-md rounded-xl bg-[#f6f5f4] dark:bg-foreground dark:invert dark:sepia-0 dark:brightness-100 dark:contrast-200"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
