import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBarMenu from "@/components/sidebar-menu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <SideBarMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
