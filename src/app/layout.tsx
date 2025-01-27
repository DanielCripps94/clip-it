import type { Metadata } from "next";
import localFont from "next/font/local";
import "../layers/1-app/globals.css";
import { NavBar } from "@/layers/3-widgets/nav-bar/facade";
import Providers from "@/layers/5-entities/providers/query-client-provider";
import Image from "next/image";
import { version } from "next/package.json";

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
        <div className="relative min-h-screen bg-gray-900">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="https://clipit-video-bucket.s3.eu-north-1.amazonaws.com/a-dark-themed-first-person-shooter-game-with-a-fut-IpWFp3PqQrWBoUssRkDaVA-zqDRyBQuT6WjrdnoVRp_ow.jpeg" // Path relative to the public directory or external URL
              alt="FPS Game Clip Showcase"
              layout="fill" // Takes up the entire space of the parent container
              objectFit="cover" // Ensures the image covers the container, cropping if necessary
              className="opacity-30"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/100 to-gray-900/100"
              style={{ mixBlendMode: "multiply" }}
            ></div>
          </div>
          <div className="relative z-10">
            <NavBar />
            <main className="px-4 py-8">
              <Providers>{children}</Providers>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
