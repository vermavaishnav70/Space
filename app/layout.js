import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
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
    <html lang="en">
      <head>
        {/* Inject metadata for SEO purposes */}
        <meta
          name="description"
          content="Space is the connected workspace where better, faster work happens."
        />
        <meta property="og:title" content="Space" />
        <meta
          property="og:description"
          content="Space is the connected workspace where better, faster work happens."
        />
        <meta property="og:url" content="https://space-qnih.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="0W_TGLiCZhf1avSSbH2mBZQP1jTYQ2CZl6sTVPtNNBw"
        />
        <title>Space</title>
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider defaultTheme="light" attribute="class">
              <Toaster position="bottom-center" />
              {children}
              <ModalProvider />
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

