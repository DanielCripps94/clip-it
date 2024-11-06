import Lottie, { Options } from "react-lottie";

interface LottieAnimationProps {
  animationConfig: Options;
  height: string;
  width: string;
}

export const useLottieAnimation = ({
  animationConfig,
  height,
  width,
}: LottieAnimationProps) => {
  return (
    <Lottie
      style={{
        width: width,
        height: height,
        transform: "unset !important",
      }}
      options={animationConfig}
    />
  );
};
