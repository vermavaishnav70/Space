import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const ActionButtons = () => {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4">
          <div className="text-sm font-medium text-gray-500 flex items-center">
          <ModeToggle  />
          </div>
          {!isLoaded && <Spinner />}
          {!isSignedIn && isLoaded && (
            <>
              <SignInButton mode="modal" redirect="/document">
                <Button variant="secondary" className="text-sm">
                  Get Space
                </Button>
              </SignInButton>
              <SignInButton mode="modal" redirect="/document">
                <Button variant="default" className="text-sm">
                  Login
                </Button>
              </SignInButton>
            </>
          )}
          {isSignedIn && isLoaded && (
            <>
              <Link href="/document">
                <Button variant="default" className="text-sm">
                  Enter Space
                </Button>
              </Link>
              <UserButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
