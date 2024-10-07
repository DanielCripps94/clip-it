import { CardFooter } from "@/components/ui/card";

interface AuthFormFooterProps {
  footerActionElement: React.ReactNode;
}

export const AuthFormFooter = ({
  footerActionElement,
}: AuthFormFooterProps) => {
  return (
    <CardFooter className="flex flex-col gap-4">
      {footerActionElement}
    </CardFooter>
  );
};
