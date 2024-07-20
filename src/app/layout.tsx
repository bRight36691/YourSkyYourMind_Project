import type { Metadata } from "next";
import { cn } from "../lib/utils";
import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "../styles/globals.css";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--ibm-plex-sans-thai-looped-font",
});

export const metadata: Metadata = {
  title: "Your Sky Your Mind",
  description: "Your Sky Your Mind project",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="th" data-theme="light">
      <body className={cn(
          "relative mx-auto min-h-screen w-full max-w-md overscroll-none font-ibmPlex",
          ibmPlexSansThaiLooped.variable,

        )}>{children}</body>
    </html>
  );
}