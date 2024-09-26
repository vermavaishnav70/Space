'use client';
import { useQuery, useMutation } from "convex/react";  
import { api } from "@/convex/_generated/api";
import React from 'react'

import { Toolbar } from "@/components/toolbar";
import Editor from "@/components/Editor/editor";
const DocumentID = ({
  params
}) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });
  const update = useMutation(api.documents.update);
  const onChange = (content) => {
    update({
      id: params.documentId,
      content
    })  
  }

  if (document === undefined) { 
    return (
      <p>Loading...</p>
    )
  }

  if (document === null) {
    return <div>Document not found</div>;
  }
  return (
    <div className="pb-40">
      <div className="h-[35vh]"/>
      <div
        className="md:max-w-3xl lg:max-w-4xl mx-auto"
      > 
        <Toolbar initialData={document}/>
        {console.log(document.content)}
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  )
}

export default DocumentID;