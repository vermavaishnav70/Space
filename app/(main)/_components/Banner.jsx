
"use client";

// import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";


export const Banner = ({ documentId }) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });
    promise.then(() => {
      toast({
        title: "Page deleted",
        description: "Your page was deleted successfully",
      });   
    }).catch((err) => {
      toast({
        title: "Error",
        description:
          "An error occurred while deleting your page please try again later",
      });
    })
    router.push("/document");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });
    promise
      .then(() => {
        toast({
          title: "Page restored",
          description: "Your page was restored successfully",
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description:
            "An error occurred while restoring your page please try again later",
        });
      });
  };

  return (
    <div className="flex w-full items-center justify-center gap-x-2 bg-rose-500 p-2 text-center text-sm text-white">
      <p>
        This page is in the <span className="font-bold">Trash.</span>
      </p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="h-auto border-white bg-transparent p-1 px-2 font-normal text-white transition hover:bg-white hover:text-rose-500"
      >
        Restore page
      </Button>
      {/* <ConfirmModal onConfirm={onRemove}> */}
        <Button
          size="sm"
          variant="outline"
          className="h-auto border-white bg-transparent p-1 px-2 font-normal text-white transition hover:bg-white hover:text-rose-500"
        >
          Delete forever
        </Button>
      {/* </ConfirmModal> */}
    </div>
  );
};
