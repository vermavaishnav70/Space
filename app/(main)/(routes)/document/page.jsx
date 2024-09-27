"use client";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
const DashBoard = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    promise
      .then((res) => {
        toast({
          title: "Document created",
          description: "Your document was created successfully",
        });
        router.push(`/document/${res}`);
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
    <div className="h-full flex flex-col items-center justify-center gap-4 ">
      <Image
        src="https://zotion-app.vercel.app/empty.svg"
        alt="Doodle illustration"
        className="dark:hidden"
        width="300"
        height="300"
      />
      <Image
        src="https://zotion-app.vercel.app/empty-dark.svg"
        alt="Doodle illustration"
        className="hidden dark:block"
        width="300"
        height="300"
      />

      <p className="text-3xl font-bold px-4  ">
        Welcome to {user.fullName || user.username}'s Space
      </p>
      <Button
        onClick={() => {
          onCreate();
        }}
      >
        Create Document
      </Button>
    </div>
  );
};

export default DashBoard;
