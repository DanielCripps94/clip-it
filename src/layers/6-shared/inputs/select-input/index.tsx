import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

interface SelectInputProps {
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  control: Control<any>;
}

export const SelectInput = ({
  name,
  label,
  placeholder,
  options,
  control,
}: SelectInputProps) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem className="flex flex-col space-y-1.5">
        <FormLabel className="text-gray-300">{label}</FormLabel>
        <Select
          value={field.value}
          onValueChange={(value) => field.onChange(value)}
        >
          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-teal-500 text-gray-500">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-gray-700/50 border-gray-600 text-gray-100">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
      </FormItem>
    )}
  />
);
