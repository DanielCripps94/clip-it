import { FormLabel } from "@/components/ui/form";
import { FileUpload } from "@/layers/5-entities/lottie-animations/file-upload";
import Dropzone from "react-dropzone";
import { Control, Controller } from "react-hook-form";

interface VideoDropzoneProps {
  handleUpload: (acceptedFiles: File[]) => void;
  uploading: boolean;
  control: Control<
    { title: string; description: string; game: string; file: {} },
    any
  >;
}

export const VideoDropzone = ({
  handleUpload,
  uploading,
  control,
}: VideoDropzoneProps) => {
  return (
    <>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <Dropzone onDrop={handleUpload} accept={{ "video/*": [] }}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div>
                  <div
                    {...getRootProps()}
                    className="pb-4 pt-2 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500 rounded-md text-center space-y-4"
                  >
                    <input {...getInputProps()} />
                    <FileUpload className="transition-all duration-200 ease-in-out transform hover:scale-105" />
                    <div>
                      <p className="text-lg font-bold text-gray-500">
                        Drop Your Epic Gameplay Here!
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        MP4, MOV, AVI, or WMV (max. 100MB)
                      </p>
                    </div>
                  </div>
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
