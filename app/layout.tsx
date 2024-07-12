import type { Metadata } from "next";
import AuthProvider from "@/contexts/auth-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QueryCliProvider from "@/contexts/query-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description:
    "Developed with Next.js, using Typescript, Tailwind CSS and Neon (PostgreSQL).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //container does not center itself automatically (mx-auto)
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryCliProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="container flex-1 mx-auto pt-[72px] space-y-2 sm:pt-[74px] sm:space-y-3">
                {children}
              </div>
              <Footer />
            </div>
          </AuthProvider>
        </QueryCliProvider>
      </body>
    </html>
  );
}
