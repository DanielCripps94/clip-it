"use client";
import { LandingHeader } from "@/layers/6-shared/landing-header/facade";
import { StartUploadingButton } from "@/layers/4-features/start-uploading-button";
import LandingContainer from "@/layers/6-shared/landing-container/facade";
import { LandingFooter } from "@/layers/6-shared/landing-footer/facade";
import { JoinButton } from "@/layers/4-features/join-button/facade";
import { LandingCards } from "@/layers/4-features/landing-cards";
import { useGetGames } from "@/layers/5-entities/get-games";

export default function LandingPage() {
  const { data, error } = useGetGames();
  return (
    <LandingContainer
      landingHeader={
        <LandingHeader
          actionElement={<StartUploadingButton buttonText="Sign up now" />}
          headerElement={"Share Your Epic Gaming Moments"}
          subElement={
            "Upload your best clips, get votes from the community, and win monthly prizes!"
          }
        />
      }
      landingFooter={
        <LandingFooter
          actionElement={<JoinButton text={"Join ClipIt Now"} />}
        />
      }
    >
      <LandingCards />
    </LandingContainer>
  );
}
