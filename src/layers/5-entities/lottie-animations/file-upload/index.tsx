"use client";
import React from "react";
import fileUpload from "./file-upload.json";
import { useLottieAnimation } from "@/layers/6-shared/hooks/use-lottie-animation";

interface FileUploadProps {
  className?: string;
}

export const FileUpload = ({ className }: FileUploadProps) => {
  const animationConfig = {
    loop: true,
    autoplay: true,
    animationData: fileUpload,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieFileUpload = useLottieAnimation({
    animationConfig,
    height: "60px",
    width: "60px",
  });

  return <div className={className}>{lottieFileUpload}</div>;
};
