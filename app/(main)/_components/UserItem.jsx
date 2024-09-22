import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser, useClerk } from "@clerk/clerk-react";
import {
  Settings,
  LogOutIcon,
  PlusIcon,
  ChevronsLeftRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const UserItem = () => {
  const { user } = useUser();
  const { openUserProfile } = useClerk();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
          role="button"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1 ">
              {user?.fullName || user?.username || "Example"}
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        {/* User Info Section */}
        <div className="flex items-center gap-x-2 p-4 border-b">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
          <div>
            <span className="block text-sm font-medium line-clamp-1">
              {user?.fullName || user?.username || "Example"}
            </span>
            <span className="block text-sm text-muted-foreground">
              {user.emailAddresses[0].emailAddress}
            </span>
          </div>
        </div>
        {/* Manage Account Section */}
        <div className="p-2 flex flex-col gap-1">
          <DropdownMenuItem asChild>
            <Button variant="ghost" onClick={() => openUserProfile()}>
              <Settings className="mr-2 h-4 w-4" />
              Manage Account
            </Button>
          </DropdownMenuItem>

          {/* Log Out */}
          <DropdownMenuItem asChild>
            <SignOutButton>
              <Button variant="destructive">
                <LogOutIcon className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </SignOutButton>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;
