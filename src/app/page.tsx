"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Upload, ThumbsUp } from "lucide-react";
import { useSession } from "next-auth/react";

const featuredGames = [
  "Valorant",
  "League of Legends",
  "Apex Legends",
  "Call of Duty",
  "Fortnite",
  "CS:GO",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter">
      <main className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight"></h1>
          <h1 className="text-5xl font-bold leading-tight">
            Share Your Epic Gaming Moments
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your best clips, get votes from the community, and win
            monthly prizes!
          </p>
          <Button
            size="lg"
            asChild
            className="mt-4 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/upload">Start Uploading</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="pt-6 text-center">
              <Upload className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Upload</h3>
              <p className="text-gray-300">Share your best gaming moments</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="pt-6 text-center">
              <ThumbsUp className="mx-auto mb-4 h-12 w-12 text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Vote</h3>
              <p className="text-gray-300">Upvote your favorite clips</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="pt-6 text-center">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Win</h3>
              <p className="text-gray-300">£30 prize for top monthly clip</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Featured Games</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredGames.map((game) => (
              <span
                key={game}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {game}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Become a ClipIt Star?</h2>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/signup">Join ClipIt Now</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
