import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@aws-amplify/ui-react/styles.css";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import { AppLayout } from "@/components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volley App",
  description: "Computer Vision for Tennis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
        <ConfigureAmplifyClientSide />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
