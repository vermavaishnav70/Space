"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { ImageIcon,X } from "lucide-react";
import { useCoverImg } from "@/hooks/use-cover-img";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { Skeleton } from "./ui/skeleton";
import { useState } from "react";

export const Cover = ({ url, preview }) => {
  const { edgestore } = useEdgeStore();
  const [isRemoving, setIsRemoving ] = useState(false);
  const params = useParams();
  const coverImage = useCoverImg();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    setIsRemoving(true);
    if (url) {

      const res=await edgestore.publicFiles.delete({
        url: url,
      })
    }
    setIsRemoving(false);
    removeCoverImage({
      id: params.documentId,
    });
  };

  return (
    <div
      className={cn(
        "group relative h-[35vh] w-full",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && (
        <Image src={url} fill alt="cover" className="object-cover" priority />
      )}
      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            disabled={isRemoving}
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <X className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="h-[12vh] w-full" />;
};
