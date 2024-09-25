"use Client";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useCoverImg } from "@/hooks/use-cover-img";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";

export const CoverImageModal = () => {
  const update = useMutation(api.documents.update);
  const [file, setfile] = useState();
  const [isSubmitting, setisSubmitting] = useState(false);
  const coverImg = useCoverImg();
  const params = useParams();
  const onChange = async (file) => {
    if (file) {
      setisSubmitting(true);
      setfile(file);
      const res = await edgestore.publicfiles.upload(file);
    }
    await update({
      id: params.documentId,
      coverImg: res.url,
    });
    onClose();
  };

  const onClose = ()=>{
    setfile(undefined);
    setisSubmitting(false);
    coverImg.onClose();
  }


  return (
    <Dialog open={coverImg.isOpen} onOpenChange={coverImg.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover image</h2>
        </DialogHeader>
        <SingleImageDropzone 
        className="w-full outline-none"
        disabled={isSubmitting}
        value={file}
        onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};
