import type { Metadata } from "next";


import ClientLayout from "@/components/core/layouts/ClientLayout";
import ProviderComponents from "./provider";
export const metadata: Metadata = {
  title: "Goal Finder",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderComponents>
          <ClientLayout>{children}</ClientLayout>
        </ProviderComponents>
      </body>
    </html>
  );
}
