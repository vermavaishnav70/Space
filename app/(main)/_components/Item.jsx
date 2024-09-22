"use client";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MoreHorizontal,
  PlusIcon,
  Trash,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { useUser } from "@clerk/clerk-react";
import { Label } from "@/components/ui/label";

export const Item = ({
  id,
  documentIcon,
  active,
  expanded,
  isSearch,
  level = 0,
  label,
  onClick,
  Icon,
  onExpand,
}) => {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const archive = useMutation(api.documents.archive);
  const ChevronIcon = expanded ? ChevronDownIcon : ChevronRightIcon;
  const onArchive = (event) => {
    event.stopPropagation();
    if (!id) return;
    const promise = archive({ id });
  };
  const handleExpand = (event) => {
    event.stopPropagation();
    onExpand?.();
  };
  const onCreate = (event) => {
    event.stopPropagation();
    if (!id) {
      return;
    }
    const promise = create({ title: "Untitled", parentDocument: id })
      .then((documentId) => {
        if (!expanded) {
          onExpand?.();
        }
        // router.push(`/document/${documentId}`);
        toast({
          title: "Document created",
          description: "Your document was created successfully",
        });
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
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 mr-1.5"
          onClick={handleExpand}
        >
          <ChevronIcon className="shrink-0 h-[18px] mr-2 text-muted-foreground/50" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        Icon && (
          <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
        )
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <>
          <kbd className=" ml-auto pointer-events-auto-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </>
      )}

      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              onClick={(event) => event.stopPropagation()}
              asChild
            >
              <div
                role="button"
                className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-60"
              side="right"
              forceMount
            >
              <DropdownMenuItem onClick={onArchive}>
                <Trash className="h-4 w-4 mr-2" />
                <Label className="text-xs">Delete</Label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="text-xs text-muted-foreground p-2   ">
                Last edited by:{" "}
                {user?.fullName || user?.username || user?.email}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div
            role="button"
            onClick={onCreate}
            className="opacity-0 group-hover:opacity-100 rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            <PlusIcon className="h-4 w-4 text-muted-foreground " />
          </div>
        </div>
      )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }) {
  return (
    <div
      style={{ paddingLeft: level ? `${level * 12 + 25}px` : "12px" }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  );
};
