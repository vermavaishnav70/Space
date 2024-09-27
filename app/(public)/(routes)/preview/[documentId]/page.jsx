"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import React from "react";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
const DocumentID = ({ params }) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });
  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor/editor"), { ssr: false }),
    []
  );
  const update = useMutation(api.documents.update);
  const onChange = (content) => {
    update({
      id: params.documentId,
      content,
    });
  };
  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-10 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Document not found</div>;
  }
  return (
    <div className="pb-40">
      <Cover preview url={document.coverImage} />
      <div className="pb-8"></div>
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar preview initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} editable={false} />
      </div>
    </div>
  );
};

export default DocumentID;
