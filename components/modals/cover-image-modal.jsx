"use Client";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useCoverImg } from "@/hooks/use-cover-img";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";

export const CoverImageModal = () => {
  const [file, setfile] = useState();
  const [isSubmitting, setisSubmitting] = useState(false);

  const update = useMutation(api.documents.update);
  const coverImg = useCoverImg();
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onClose = () => {
    setfile(undefined);
    setisSubmitting(false);
    coverImg.onClose();
  };
  const onChange = async (file) => {
    if (file) {
      setisSubmitting(true);
      setfile(file);
      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImg.url,
        },
      });
      await update({
        id: params.documentId,
        coverImage: res.url,
      });
      onClose();
    }
  };

  return (
    <Dialog open={coverImg.isOpen} onOpenChange={coverImg.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Cover Image
          </DialogTitle>
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
