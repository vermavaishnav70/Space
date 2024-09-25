"use client";
import { Spinner } from "@/components/spinner";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner size="icon" />
      </div>
    );
  }

  if (!isSignedIn) {
    return redirect("/");
  }

  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
        </main>
    </div>
  );
};
export default MainLayout;
