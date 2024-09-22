import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react"
import { useParams } from "next/navigation"
import { MenuIcon } from "lucide-react";
import { Title } from "./title";
import { Banner } from "./Banner";
import { Menu } from "./Menu";
// import { Menu } from "./menu";
// import { Publish } from "./Publish";
export const Navbar = ({ isCollapsed, ResetWidth }) => {
  const params = useParams();
  const document = useQuery(
    api.documents.getById,({
      documentId: params.documentId,
    })
  );
  if (document === undefined) {
    return (
      <nav className="flex  w-full items-center bg-background px-3 py-2 dark:bg-[#1F1F1F] justify-between ">
        <Title.Skeleton />
        <div className="flex items-center gap-x-4">
          <Menu.Skeleton />
        </div>
      </nav>
      );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="flex  w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-[#1F1F1F]">
        {isCollapsed && (
            <MenuIcon
                role="button"
              onClick={ResetWidth}
              className="h-6 w-6 text-muted-foreground"
            />
        )}
        <div className="flex w-full items-center justify-between">
          <Title initialData={document} />  
          <div className="flex items-center gap-x-4">
            <Menu documentId={document._id} /></div> 
        </div>
      </nav>
      {document.isArchived && (
        <Banner documentId={document._id} />
      )}
    </>
  );
};