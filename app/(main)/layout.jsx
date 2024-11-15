"use client";

import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import Navigation from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";
import { useConvexAuth } from "convex/react";

const MainLayout = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="icon" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Use client-side navigation for unauthenticated users
    router.push("/");
    return null; // Prevent further rendering
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