import { useState } from "react";
import Dropzone from "react-dropzone";

interface VideoDropzoneProps {
  handleUpload: (acceptedFiles: File[]) => void;
  uploading: boolean;
  uploadStatus: null | string;
}

export const VideoDropzone = ({
  handleUpload,
  uploading,
  uploadStatus,
}: VideoDropzoneProps) => {
  return (
    <>
      <Dropzone onDrop={handleUpload} accept={{ "video/*": [] }}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className="p-6 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-gray-400"
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop a video here, or click to select a file</p>
            </div>
          </section>
        )}
      </Dropzone>
      {uploading && <p className="mt-4 text-yellow-400">Uploading...</p>}
      {uploadStatus && (
        <p
          className={`mt-4 ${
            uploadStatus.includes("successfully")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {uploadStatus}
        </p>
      )}
    </>
  );
};
