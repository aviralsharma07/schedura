import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="FY8Y5EpIMe8orVBkxxhZsP6CaZl6u0eAYPWOtQ3RgC8" />
        </head>
        <body className={inter.className}>
          {/* Header */}
          <Header />
          <main className="min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white">{children}</main>
          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container flex gap-2 md:text-base text-[10px] justify-center mx-auto px-4 text-center text-gray-600">
              <p>Made with &#x2764; by Aviral</p>
              {" | "}
              <Link href="https://github.com/aviralsharma07/schedura" className="hover:text-blue-500 hover:underline hover:font-semibold" target="_blank">
                Github
              </Link>
              {" | "}
              <Link href="/privacy-policy" className="hover:text-blue-500 hover:underline hover:font-semibold" target="_blank">
                Privacy Policy
              </Link>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
