import { FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordValidation } from "../use-password-validation";
import {
  ControllerRenderProps,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";
import { PasswordRule } from "../ui/password-input-rule";
import { FormValuesType } from "@/layers/5-entities/schemas/auth-schemas/signup-schema";

interface PasswordRuleProps {
  watch: UseFormWatch<FormValuesType>;
  errors: FieldErrors<FormValuesType>;
  label: string;
  field: ControllerRenderProps<FormValuesType, "password">;
}

export const RHFPasswordInput = ({
  watch,
  errors,
  label,
  field,
}: PasswordRuleProps) => {
  const password = watch("password");
  const { passwordRuleList } = usePasswordValidation(password);

  return (
    <FormItem>
      <FormLabel className="text-gray-300">{label}</FormLabel>
      <div>
        <Input
          {...field}
          id="password"
          type="password"
          placeholder="Enter your password"
          className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
        {errors.password && (
          <div className="mt-2 space-y-1">
            {passwordRuleList.map((rule, index) => (
              <PasswordRule key={index} met={rule.met} text={rule.text} />
            ))}
          </div>
        )}
      </div>
    </FormItem>
  );
};
