import { useMutation } from "@tanstack/react-query";
import { uploadVideo } from "../../api/upload-video";
import { UploadVideoSchema } from "../../facade";

export const useVideoUpload = () => {
  const query = useMutation({
    mutationFn: (data: UploadVideoSchema) => uploadVideo(data),
    mutationKey: ["UPLOAD_VIDEO"],
    onSuccess: (data) => {
      console.log("Uploaded video data:", data);
    },
  });
  return query;
};
