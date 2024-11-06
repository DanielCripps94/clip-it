"use client";
import { CardContent } from "@/components/ui/card";
import React from "react";
import { useFormContext } from "react-hook-form";
import { TextInput } from "@/layers/6-shared/inputs/text-input/text-input";
import { TextArea } from "@/layers/6-shared/inputs/textarea-input.tsx";
import { SelectInput } from "@/layers/6-shared/inputs/select-input";

interface UploadFormProps {
  videoDropComponent: React.ReactNode;
  submitActionElement: React.ReactNode;
}

export const UploadForm = ({
  videoDropComponent,
  submitActionElement,
}: UploadFormProps) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col space-y-4 justify-center">
      <CardContent className="p-1">
        <div className="grid grid-cols-1 gap-6 text-left">
          <TextInput
            name="title"
            label="Title"
            placeholder="Enter the title"
            control={control}
          />
          <TextArea
            name="description"
            label="Description"
            placeholder="Describe your awesome clip"
            control={control}
          />
          <SelectInput
            name="game"
            label="Game"
            placeholder="Select the game"
            control={control}
            options={[
              { value: "csgo", label: "Counter-Strike: Global Offensive" },
              { value: "valorant", label: "Valorant" },
              { value: "fortnite", label: "Fortnite" },
              { value: "apex", label: "Apex Legends" },
              { value: "overwatch", label: "Overwatch" },
            ]}
          />
        </div>
      </CardContent>
      {videoDropComponent}
      {submitActionElement}
    </div>
  );
};
