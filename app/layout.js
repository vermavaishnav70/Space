import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space",
  description:
    "Space is the connected workspace where better, faster work happens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider  attribute="class">
          <Toaster position="bottom-center" />
          {children}
          <ModalProvider />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

// import localFont from "next/font/local";
// import "./globals.css";
// import { ConvexReactClient } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { ClerkProvider, useAuth } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/toaster";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <ClerkProvider
//           publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//         >
//           <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//             {children}
//             <Toaster />
//           </ConvexProviderWithClerk>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }
