import React from "react";
import { VideoUploadWidget } from "@/layers/3-widgets/video-upload-form";
import { AuthFormContainer } from "@/layers/6-shared/auth-form-container";

const VideoUploadPage = () => {
  return (
    <AuthFormContainer
      authTitle="Upload Your Video"
      authSubtitle="Upload your video to share with the community"
    >
      <VideoUploadWidget />
    </AuthFormContainer>
  );
};

export default VideoUploadPage;
