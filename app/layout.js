import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "./prosemirror.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space",
  description:
    "Space is the connected workspace where better, faster work happens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ConvexClientProvider>
          {/* <EdgeStoreProvider> */}
          <ThemeProvider enableSystem={true} attribute="class">
          <Toaster position="bottom-center" />
          {children}
          <ModalProvider />
          </ThemeProvider>
          {/* </EdgeStoreProvider> */}
        </ConvexClientProvider>
      </body>
    </html>
  );
}

