import { FormLabel } from "@/components/ui/form";
import { FileUpload } from "@/layers/5-entities/lottie-animations/file-upload";
import Dropzone from "react-dropzone";
import { Control, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, X } from "lucide-react";

interface VideoDropzoneProps {
  handleUpload: (acceptedFiles: File[]) => void;
  uploading: boolean;
  control: Control<
    { title: string; description: string; game: string; file: null },
    any
  >;
}

export const VideoDropzone = ({
  handleUpload,
  uploading,
  control,
}: VideoDropzoneProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onDrop = (acceptedFiles: File[]) => {
    handleUpload(acceptedFiles);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const removeVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviewUrl(null);
    setIsPlaying(false);
  };

  return (
    <>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <Dropzone onDrop={onDrop} accept={{ "video/*": [] }}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="pb-4 pt-2 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500 rounded-md text-center space-y-4"
                >
                  <input {...getInputProps()} />
                  {previewUrl ? (
                    <div className="relative w-full h-48">
                      <video
                        ref={videoRef}
                        src={previewUrl}
                        className="w-full h-full object-cover rounded-md"
                        onEnded={() => setIsPlaying(false)}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Button
                          onClick={togglePlay}
                          className="mr-2"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          onClick={removeVideo}
                          variant="destructive"
                          aria-label="Remove video"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <FileUpload className="transition-all duration-200 ease-in-out transform hover:scale-105" />
                      <div>
                        <p className="text-lg font-bold text-gray-500">
                          Drop Your Epic Gameplay Here!
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          MP4, MOV, AVI, or WMV (max. 100MB)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
        )}
      />
      {uploading && <p className="mt-4 text-yellow-400">Uploading...</p>}
    </>
  );
};
