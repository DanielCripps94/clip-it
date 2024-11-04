import { Avatar } from "@/components/ui/avatar";
import { Session } from "next-auth";

interface UserAvatarProps {
  session: Session;
}

export const UserAvatar = ({ session }: UserAvatarProps) => {
  return (
    <Avatar className="bg-gradient-to-r flex flex items-center justify-center from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
      {session?.user?.name?.charAt(0)}
    </Avatar>
  );
};
