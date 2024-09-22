import { Loader2 as Loader } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define spinner variants with size options
const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      icon: "h-10 w-10",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

// Spinner component
export const Spinner = ({ size = "default" }) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};
