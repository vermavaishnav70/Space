"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  ChevronsLeft,
  MenuIcon,
  PlusCircle,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import { Navbar } from "./navbar";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import UserItem from "./UserItem";
import { Item } from "./Item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import DocumentList from "./documentList";
import { TrashBox } from "./trashBox";
import { Label } from "@/components/ui/label";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-setting";
import { toast } from "@/hooks/use-toast";

const Navigation = () => {
  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isResizingRef = useRef(false);
  const sidebarRef = useRef(null);
  const create = useMutation(api.documents.create);
  const navbarRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const search = useSearch();
  const settings = useSettings();

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    if (!isResizingRef.current) {
      return;
    }
    let newWidth = event.clientX;
    if (newWidth < 240) {
      newWidth = 240;
    }
    if (newWidth > 480) {
      newWidth = 480;
    }
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `$newWidthpx`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.removeProperty("width");
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100%-240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);
    }
    sidebarRef.current.style.width = "0";
    navbarRef.current.style.setProperty("left", "0");
    navbarRef.current.style.setProperty("width", "100%");
    setTimeout(() => {
      setIsResetting(false);
    }, 300);
  };
  const handleCreate = () => {
    const promise = create({ title: "Untitled" });
    promise
      .then((res) => {
        toast({
          title: "Document created",
          description: "Your document was created successfully",
        });
        return res; // Optional if you need to handle the document
      })
      .catch((err) => {
        toast({
          title: "Error",
          description:
            "An error occurred while creating your document please try again later",
        });
      });
  };
  return (
    <div>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-64 flex-col z-[300]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "absolute right-2 top-3 h-6 w-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-neutral-300 group-hover/sidebar:opacity-100 dark:hover:bg-neutral-600",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <UserItem />
          <Item label="Search" Icon={Search} isSearch onClick={search.onOpen} />
          <Item label="New Page" Icon={PlusCircle} onClick={handleCreate} />
          <Item label="Settings" Icon={Settings} onClick={settings.onOpen} />
        </div>
        <div className="mt-4">
          <DocumentList />
          <Item onClick={handleCreate} Icon={PlusCircle} label="Add a Page" />
          <Popover>
            <PopoverTrigger className="w-full mt-4">
              <Item label="Trash" Icon={Trash} />
            </PopoverTrigger>
            <PopoverContent side={isMobile ? "bottom" : "right"}>
              <TrashBox />{" "}
            </PopoverContent>
          </Popover>
        </div>
        <div
          onMouseDown={(event) => handleMouseDown(event)}
          onClick={() => {
            collapse();
          }}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-col-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute z-[300] top-0 left-68 w-[calc(100%-240px)] ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        {!!params.documentId ? (
          <Navbar ResetWidth={resetWidth} isCollapsed={isCollapsed} />
        ) : (
          <nav className="bg-transparent px-3 py-2 w-full">
            {isCollapsed && (
              <MenuIcon
                onClick={() => resetWidth()}
                role="button"
                className="h-6 w-6 text-muted-foreground"
              />
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navigation;
