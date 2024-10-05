"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthFormContainer } from "@/layers/6-shared/auth-form-container/facade";
import { AuthFormFooter } from "@/layers/6-shared/auth-form-container/ui/auth-form-footer";
import { CreateAccountAction } from "@/layers/4-features/create-account-action/facade";
import { LoginSubmitButton } from "@/layers/4-features/login-submit-button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error handling
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state on each submit

    const result = await signIn("credentials", {
      email: username,
      password,
      redirect: false,
      callbackUrl: "/login",
    });

    if (result?.error) {
      setError(result.error);
      console.error(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <AuthFormContainer
      authTitle="ClipIt"
      authSubtitle="Access the best gaming content instantly"
      footerElement={
        <AuthFormFooter
          formSubmitActionElement={
            <LoginSubmitButton handleSubmit={handleSubmit} text={"Login"} />
          }
          footerActionElement={
            <CreateAccountAction
              header={"New to ClipIt?"}
              href="/signup"
              buttonText={"Create an account"}
            />
          }
        />
      }
    >
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
    </AuthFormContainer>
  );
}
