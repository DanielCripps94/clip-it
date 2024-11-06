import { useMutation } from "@tanstack/react-query";
import { uploadVideo } from "../../api/upload-video";

export const useVideoUpload = () => {
  const query = useMutation({
    mutationFn: ({ data }: { data: any }) => uploadVideo(data),
    mutationKey: ["UPLOAD_VIDEO"],
    onSuccess: (data) => {
      console.log("Uploaded video data:", data);
    },
  });
  return query;
};
