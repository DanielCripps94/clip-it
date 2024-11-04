import { CardContent } from "@/components/ui/card";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface UploadFormProps {
  videoDropComponent: React.ReactNode;
}

export const UploadForm = ({ videoDropComponent }: UploadFormProps) => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      game: "",
    },
  });
  const { control, handleSubmit } = form;
  const [game, setGame] = React.useState<string | undefined>();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex flex-col space-y-4 justify-center">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 text-left">
              <div className="space-y-6">
                <div>
                  <FormField
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-gray-300">Title</FormLabel>
                        <Input
                          {...field}
                          id="title"
                          placeholder="Enter the title"
                        />
                        <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-gray-300">
                          Description
                        </FormLabel>
                        <Input
                          {...field}
                          type="textarea"
                          id="description"
                          placeholder="Describe your awesome clip"
                        />
                        <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    name="game"
                    control={control}
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-gray-300">Game</FormLabel>
                          <Select value={game} onValueChange={setGame}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select the game" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="csgo">
                                Counter-Strike: Global Offensive
                              </SelectItem>
                              <SelectItem value="valorant">Valorant</SelectItem>
                              <SelectItem value="fortnite">Fortnite</SelectItem>
                              <SelectItem value="apex">Apex Legends</SelectItem>
                              <SelectItem value="overwatch">
                                Overwatch
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs border-x border-b border-red-600 mt-0 rounded-b-md py-1 px-2" />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          {videoDropComponent}
          <button type="submit">Submit</button>
        </div>
      </form>
    </Form>
  );
};
