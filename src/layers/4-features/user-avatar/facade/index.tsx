"use client";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";

export const UserAvatar = () => {
  const { data: session, status } = useSession();

  return (
    <Avatar className="bg-gradient-to-r flex flex items-center justify-center from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};
