import { Button } from "@/components/ui/button";
import Link from "next/link";

interface JoinButtonProps {
  text: string;
}

export const JoinButton = ({ text }: JoinButtonProps) => {
  return (
    <Button
      size="lg"
      asChild
      className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <Link href="/signup">{text}</Link>
    </Button>
  );
};
