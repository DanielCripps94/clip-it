"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthFormContainer } from "@/layers/6-shared/auth-form-container/facade";
import { AuthFormFooter } from "@/layers/6-shared/auth-form-container/ui/auth-form-footer";
import { SignupSubmitButton } from "@/layers/4-features/signup-submit-button/facade";
import { CreateAccountAction } from "@/layers/4-features/create-account-action/facade";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // For error handling
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Make an API call to create a new user
      const res = await fetch("/api/user/create", {
        // Update to your API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username, // Adjust field names as per your backend
          email,
          password,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Something went wrong!");
        return;
      }

      // Redirect to the login page on successful signup
      router.push("/login");
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <AuthFormContainer
      authTitle="ClipIt"
      authSubtitle="Access the best gaming content instantly"
      footerElement={
        <AuthFormFooter
          formSubmitActionElement={
            <SignupSubmitButton
              handleSubmit={handleSubmit}
              text={"Create Account"}
            />
          }
          footerActionElement={
            <CreateAccountAction
              header={"Already have an account?"}
              href="/login"
              buttonText={"Log in"}
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
              placeholder="Choose your gamer tag"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-gray-300">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>
      </form>
    </AuthFormContainer>
  );
}
