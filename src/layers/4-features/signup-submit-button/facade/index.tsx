import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface SignupSubmitButtonProps {
  text: string;
}

export const SignupSubmitButton = ({ text }: SignupSubmitButtonProps) => {
  return (
    <div className="pt-6 pb-2">
      <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <UserPlus className="w-4 h-4 mr-2" />
        {text}
      </Button>
    </div>
  );
};
