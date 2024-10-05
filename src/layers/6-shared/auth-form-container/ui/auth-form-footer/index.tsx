import { CardFooter } from "@/components/ui/card";

interface AuthFormFooterProps {
  formSubmitActionElement: React.ReactNode;
  footerActionElement: React.ReactNode;
}

export const AuthFormFooter = ({
  formSubmitActionElement,
  footerActionElement,
}: AuthFormFooterProps) => {
  return (
    <CardFooter className="flex flex-col gap-4">
      {formSubmitActionElement}
      {footerActionElement}
    </CardFooter>
  );
};
