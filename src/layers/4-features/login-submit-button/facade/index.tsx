import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface LoginSubmitButtonProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  text: string;
}

export const LoginSubmitButton = ({
  handleSubmit,
  text,
}: LoginSubmitButtonProps) => {
  return (
    <Button
      onClick={handleSubmit}
      className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <LogIn className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};
