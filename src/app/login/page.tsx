"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, LogIn } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute opacity-10"></div>
      <Card className="w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-gray-100 flex items-center justify-center gap-2">
            <Gamepad2 className="w-8 h-8 text-teal-500" />
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
              ClipIt
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Access the best gaming content instantly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="text-gray-300">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your gamer tag"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <div className="text-sm text-gray-400">
            New to ClipIt?
            <Button
              variant="link"
              onClick={() => router.push("/signup")}
              className="text-teal-400 hover:text-teal-300 pl-1"
            >
              Create an account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
