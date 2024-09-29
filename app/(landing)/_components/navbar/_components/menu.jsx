"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const Features = [
  {
    title: "Sign In",
    description:
      "Used Sign In by clerk to allow users to sign in and out of app.",
  },
  {
    title: "Editor",
    description:
      "The editor is used to create and edit content in the app.Used Tiptap editor to create and edit content in the app.",
  },
  {
    title: "Realtime",
    description:
      "Using Realtime to allow users to create and edit content in the app.Using Realtime to allow users to create and edit content in the app.",
  },
  {
    title: "Uploading",
    description: "Can upload images and videos in the app stored in the database.",
  },
];

const Upcoming = [
  {
    title: "AI Generation",
    description:
      "Integrate AI generation functionality into the app.Using API to generate content in the app.",
  },
  {
    title: "Collaboration",
    description:
      "Currently supports only one user.Using Realtime to allow users to create and edit live content in the app.",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                  <div>
                    <a>Wikis</a>
                    <p className="text-gray-400 text-sm font-light">
                      Centralize your knowledge
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiTargetLight className="text-2xl mr-2 text-blue-600" />
                  <div>
                    <a>Projects</a>
                    <p className="text-gray-400 text-sm font-light">
                      For every team or size
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiFileThin className="text-2xl mr-2 text-yellow-600" />
                  <div>
                    <a>Docs</a>
                    <p className="text-gray-400 text-sm font-light">
                      Simple & Powerful
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiSparkleLight className="text-2xl mr-2 text-purple-600" />
                  <div>
                    <a>Collabrate</a>
                    <p className="text-gray-400 text-sm font-light">
                      Collaborate with others
                    </p>
                  </div>
                </div>
              </ul>
              <div>
                <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Template gallery</a>
                      <p className="text-gray-400 text-sm font-light">
                        Setups to get you started
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Customer Stories</a>
                      <p className="text-gray-400 text-sm font-light">
                        See how teams use Space
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Connections</a>
                      <p className="text-gray-400 text-sm font-light">
                        Connect your tools to Space
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Features.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Upcoming Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Upcoming.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
