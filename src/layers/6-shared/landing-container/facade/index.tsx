"use client";
import { useRef } from "react";
import { LandingContent } from "../../landing-content/facade";
import { GamesDisplay } from "@/layers/4-features/games-display";

interface LandingPageProps {
  landingHeader: React.ReactNode;
  children: React.ReactNode;
  landingFooter: React.ReactNode;
}

export default function LandingContainer({
  landingHeader,
  children,
  landingFooter,
}: LandingPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen relative text-white font-inter">
      <main className="container relative z-10 mx-auto px-4 py-16 space-y-12">
        {landingHeader}
        <GamesDisplay />
        <LandingContent>{children}</LandingContent>
        {landingFooter}
      </main>
    </div>
  );
}
