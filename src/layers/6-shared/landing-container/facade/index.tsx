"use client";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter">
      <main className="container mx-auto px-4 py-16 space-y-12">
        {landingHeader}
        <GamesDisplay />
        <LandingContent>{children}</LandingContent>
        {landingFooter}
      </main>
    </div>
  );
}
