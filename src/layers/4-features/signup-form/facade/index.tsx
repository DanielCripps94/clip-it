"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signUpFormSchema } from "@/layers/5-entities/schemas/auth-schemas/signup-schema";
import { RHFPasswordInput } from "@/layers/6-shared/rhf-password-input/facade";

export interface SignUpFormProps {
  submitFormElement: React.ReactNode;
}

export const SignUpForm = ({ submitFormElement }: SignUpFormProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    const { username, email, password } = values;
    if (values.password !== values.confirmPassword || values.password === "") {
      console.error("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        return;
      }
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel className="text-gray-300">Username</FormLabel>
                  <div>
                    <Input
                      {...field}
                      id="username"
                      placeholder="Enter your gamer tag"
                      className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <div>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <RHFPasswordInput
                  watch={watch}
                  errors={errors}
                  label="Password"
                  field={field}
                />
              )}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-1.5">
                  <FormLabel className="text-gray-300">
                    Confirm Password
                  </FormLabel>
                  <div>
                    <Input
                      {...field}
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
        {submitFormElement}
      </form>
    </Form>
  );
};
