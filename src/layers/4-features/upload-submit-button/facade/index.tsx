import { Button } from "@/components/ui/button";

interface UploadSubmitButtonProps {
  text: string;
}

export const UploadSubmitButton = ({ text }: UploadSubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      {text}
    </Button>
  );
};
