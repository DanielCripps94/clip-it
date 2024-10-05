import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AuthFormHeader } from "../ui/auth-form-header";

interface AuthFormContainerProps {
  authTitle: string;
  authSubtitle: string;
  children?: React.ReactNode;
  footerElement: React.ReactNode;
}

export const AuthFormContainer = ({
  authTitle,
  authSubtitle,
  children,
  footerElement,
}: AuthFormContainerProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute opacity-10"></div>
      <Card className="w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl">
        <AuthFormHeader authTitle={authTitle} authSubtitle={authSubtitle} />
        <CardContent>{children}</CardContent>
        <CardFooter className="flex flex-col gap-4">{footerElement}</CardFooter>
      </Card>
    </div>
  );
};
