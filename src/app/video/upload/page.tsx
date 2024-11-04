"use client";
import { useVideoUpload } from "@/layers/3-widgets/video-upload-form/hooks/use-video-upload";
import { UploadForm } from "@/layers/4-features/upload-form";
import { VideoDropzone } from "@/layers/4-features/video-drop";
import { useState } from "react";
import Dropzone from "react-dropzone";

const VideoUploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<null | string>(null);
  const { mutate: handleUploadVideo, isPending, data } = useVideoUpload();

  // const handleUpload = async (acceptedFiles: File[]) => {
  //   setUploading(true);
  //   setUploadStatus(null);
  //   console.log(acceptedFiles);

  //   const file = acceptedFiles[0];
  //   const formData = new FormData();

  //   formData.append("file", file);
  //   formData.append("title", "My Video Title"); // Replace with dynamic title input if desired
  //   formData.append("description", "My Video Description");
  //   formData.append("published", "true");

  //   try {
  //     const response = await fetch("/api/videos/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const data = await response.json(); // Parse the response body as JSON
  //       console.log("Uploaded video data:", data);
  //       setUploadStatus("Video uploaded successfully!");
  //     } else {
  //       const errorData = await response.json();
  //       setUploadStatus(`Upload failed: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error uploading video:", error);
  //     setUploadStatus("An error occurred during the upload.");
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex pt-8 py-4 bg-gradient-to-br from-gray-900 to-black text-white justify-center">
      <div className="text-center">
        <h2 className="text-2xl mb-6">Upload Your Video</h2>
        <UploadForm
          videoDropComponent={
            <VideoDropzone
              handleUpload={handleUploadVideo}
              uploadStatus={uploadStatus}
              uploading={uploading}
            />
          }
        />
      </div>
    </div>
  );
};

export default VideoUploadPage;
