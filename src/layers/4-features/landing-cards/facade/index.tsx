import { LandingCardContent } from "@/layers/5-entities/content-card/facade";
import { Upload, ThumbsUp, Trophy } from "lucide-react";
import React from "react";

export const LandingCards = () => {
  return (
    <>
      <LandingCardContent
        icon={<Upload className="mx-auto mb-4 h-12 w-12 text-blue-400" />}
        header="Upload"
        subHeader="Share your best gaming moments"
      />
      <LandingCardContent
        icon={<ThumbsUp className="mx-auto mb-4 h-12 w-12 text-green-400" />}
        header="Vote"
        subHeader="Upvote your favorite clips"
      />
      <LandingCardContent
        icon={<Trophy className="mx-auto mb-4 h-12 w-12 text-yellow-400" />}
        header="Win"
        subHeader="£30 prize for top monthly clip"
      />
    </>
  );
};
