"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Upload, ThumbsUp } from "lucide-react";
import { LandingContent } from "../../landing-content/facade";
import { LandingCardContent } from "@/layers/5-entities/content-card/facade";
import { LandingHeader } from "../../landing-header/facade";
import { StartUploadingButton } from "@/layers/4-features/start-uploading-button";
import { GamesDisplay } from "@/layers/4-features/games-display";

const featuredGames = [
  "Valorant",
  "League of Legends",
  "Apex Legends",
  "Call of Duty",
  "Fortnite",
  "CS:GO",
];

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
      <main className="container mx-auto px-4 py-16 space-y-16">
        {landingHeader}
        <LandingContent>{children}</LandingContent>
        <GamesDisplay />
        {landingFooter}
      </main>
    </div>
  );
}
