import type { Metadata } from "next";
import localFont from "next/font/local";
import "../layers/1-app/globals.css";
import { NavBar } from "@/layers/3-widgets/nav-bar/facade";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ClipIt",
  description: "Generate your own creation with ClipIt",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-gradient-to-br from-gray-900 to-black">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
