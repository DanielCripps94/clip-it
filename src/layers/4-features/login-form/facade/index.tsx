"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  submitFormElement: React.ReactNode;
}

export const LoginForm = ({ submitFormElement }: LoginFormProps) => {
  const router = useRouter();
  const loginFormSchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof loginFormSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const result = await signIn("credentials", {
      email: values.username,
      password: values.password,
      redirect: false,
      // callbackUrl: "/login",
    });
    if (result?.error) {
      //   setError(result.error);
      console.error(result.error);
    } else {
      // router.push("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel className="text-gray-300">Username</FormLabel>
                <Input
                  {...field}
                  id="username"
                  placeholder="Enter your gamer tag"
                  className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel className="text-gray-300">Password</FormLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {submitFormElement}
      </form>
    </Form>
  );
};
