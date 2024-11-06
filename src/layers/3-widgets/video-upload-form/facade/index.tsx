"use client";
import React from "react";
import { useVideoUpload } from "@/layers/3-widgets/video-upload-form/hooks/use-video-upload";
import { UploadForm } from "@/layers/4-features/upload-form";
import { VideoDropzone } from "@/layers/4-features/video-drop";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { UploadSubmitButton } from "@/layers/4-features/upload-submit-button/facade";

export const VideoUploadWidget = () => {
  const { mutate: handleUploadVideo, isPending, data } = useVideoUpload();
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      game: "",
      file: {},
    },
  });
  const { control, handleSubmit, setValue } = form;

  const onSubmit = (data: any) => {
    handleUploadVideo({ data });
  };

  const handleUpload = (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      setValue("file", acceptedFiles[0]);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UploadForm
          submitActionElement={<UploadSubmitButton text="Upload Video" />}
          videoDropComponent={
            <VideoDropzone
              control={control}
              handleUpload={handleUpload}
              uploading={isPending}
            />
          }
        />
      </form>
    </Form>
  );
};
