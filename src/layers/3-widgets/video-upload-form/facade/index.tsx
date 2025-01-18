"use client";
import React from "react";
import { useVideoUpload } from "@/layers/3-widgets/video-upload-form/hooks/use-video-upload";
import { UploadForm } from "@/layers/4-features/upload-form";
import { VideoDropzone } from "@/layers/4-features/video-drop";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { UploadSubmitButton } from "@/layers/4-features/upload-submit-button/facade";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const uploadVideoSchema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  game: z.string().nonempty("Game is required"),
  file: z
    .instanceof(File)
    .nullable()
    .refine((file) => file === null || file.size > 0, {
      message: "File is required",
    }),
});

export type UploadVideoSchema = z.infer<typeof uploadVideoSchema>;

export const VideoUploadWidget = () => {
  const { mutate: handleUploadVideo, isPending, data } = useVideoUpload();
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      game: "",
      file: null,
    },
    resolver: zodResolver(uploadVideoSchema),
  });
  const { control, handleSubmit, setValue } = form;

  const onSubmit = (data: UploadVideoSchema) => {
    handleUploadVideo(data);
  };

  // Handle file upload selection
  const handleUpload = (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      // @ts-ignore
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
