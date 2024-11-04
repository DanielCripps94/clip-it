import { LandingHeader } from "@/layers/6-shared/landing-header/facade";
import { StartUploadingButton } from "@/layers/4-features/start-uploading-button";
import LandingContainer from "@/layers/6-shared/landing-container/facade";
import { LandingFooter } from "@/layers/6-shared/landing-footer/facade";
import { JoinButton } from "@/layers/4-features/join-button/facade";
import { LandingCards } from "@/layers/4-features/landing-cards";

export default function LandingPage() {
  return (
    <LandingContainer
      landingHeader={
        <LandingHeader
          actionElement={<StartUploadingButton buttonText="Start Uploading" />}
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
      <video width="1920" height="1080" controls>
        <source
          src="https://clipit-video-bucket.s3.eu-north-1.amazonaws.com/videos/60baf150-146b-4b69-8e47-b84381e36693"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <LandingCards />
    </LandingContainer>
  );
}
