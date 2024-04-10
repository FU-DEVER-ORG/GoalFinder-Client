import type { Metadata } from "next";
// import { Inter } from "next/font/google";
export const metadata: Metadata = {
  title: "Goal Finder",
};
import "./globals.css";
import ClientLayout from "@/components/layouts/clientLayout";
import ProviderComponents from "./provider";

// const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderComponents>{children}</ProviderComponents>
      </body>
    </html>
  );
}
