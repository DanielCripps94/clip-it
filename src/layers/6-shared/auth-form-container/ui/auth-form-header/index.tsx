import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

interface AuthFormHeaderProps {
  authTitle: string;
  authSubtitle: string;
}

export const AuthFormHeader = ({
  authTitle,
  authSubtitle,
}: AuthFormHeaderProps) => {
  return (
    <CardHeader className="space-y-1 text-center">
      <CardTitle className="text-3xl font-bold text-gray-100 flex items-center justify-center gap-2">
        <Gamepad2 className="w-8 h-8 text-teal-500" />
        <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
          {authTitle}
        </span>
      </CardTitle>
      <CardDescription className="text-gray-400">
        {authSubtitle}
      </CardDescription>
    </CardHeader>
  );
};
