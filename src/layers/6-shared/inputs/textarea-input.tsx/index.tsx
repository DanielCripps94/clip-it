import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
}

export const TextArea = ({
  name,
  label,
  placeholder,
  control,
}: TextAreaProps) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem className="flex flex-col space-y-1.5">
        <FormLabel className="text-gray-300">{label}</FormLabel>
        <Textarea
          {...field}
          id={name}
          placeholder={placeholder}
          className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
        <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
      </FormItem>
    )}
  />
);
