import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CreateAccountActionProps {
  header: string;
  href: string;
  buttonText: string;
}

export const CreateAccountAction = ({
  header,
  href,
  buttonText,
}: CreateAccountActionProps) => {
  const router = useRouter();
  return (
    <div className="text-sm text-gray-400">
      {header}
      <Button
        variant="link"
        onClick={() => router.push(href)}
        className="text-teal-400 hover:text-teal-300 pl-1"
      >
        {buttonText}
      </Button>
    </div>
  );
};
