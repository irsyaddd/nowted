import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateRandomId, getMonth, cn } from "@/lib/utils";
import { FolderProps, NoteProps } from "@/types";
import { useNoteStore } from "@/zustand/noteStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { CalendarDays, Folder } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Tiptap from "./tiptapWithContext/tiptap";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContentForm({ data }: { data: NoteProps }) {
  const {
    folderListz,
    noteListz,
    updateNoteList,
    createNoteMode,
    editNoteMode,
    setCreateNoteMode,
    setEditNoteMode,
    content,
  } = useNoteStore();
  const formSchema = z.object({
    filename: z.string().max(20, {
      message: "Too Long",
    }),
    foldername: z.string().trim().nonempty({ message: "Folder is required" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filename: "",
      foldername: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const noteObj = {
      id: generateRandomId(),
      category: values.foldername,
      title: values.filename || "Untitled",
      content,
      createdAt: new Date(),
      status: "default",
    };
    const noteList = [...noteListz, noteObj];
    updateNoteList(noteList);
    localStorage.setItem("noteList", JSON.stringify(noteList));
    form.reset();
    setCreateNoteMode(false);
  }

  const [isMounted, setIsMounted] = useState(false);

  const createdDate = () => {
    const today = new Date();
    const date = today.getDate().toString().padStart(2, "0");
    const month = getMonth(today.getMonth() + 1)?.slice(0, 3);
    const year = today.getFullYear().toString();

    return `${date} ${month} ${year}`;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-between w-full">
            <FormField
              control={form.control}
              name="filename"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...form.register("filename")}
                      placeholder="Untitled"
                      className="h-auto text-3xl font-semibold text-white bg-transparent border-none w-fit focus:outline focus:ring-1 focus:ring-indigo-600 focus:rounded-none"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-x-3 shrink-0">
              <Button
                type="submit"
                className="text-white bg-indigo-600 hover:bg-indigo-500"
              >
                Save Note
              </Button>
              <Button
                type="button"
                className="text-white bg-white/10 hover:bg-white/20"
                onClick={() => {
                  setCreateNoteMode(false);
                  form.reset();
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex text-sm">
              <div className="flex items-center gap-6 text-white/60">
                <CalendarDays className="w-4 h-4" />
                <p className="w-28">Date</p>
              </div>
              <p>{createdDate()}</p>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex text-sm">
              <div className="flex items-center gap-6 text-white/60">
                <Folder className="w-4 h-4" />
                <p className="w-28">Folder</p>
              </div>
              <FormField
                control={form.control}
                name="foldername"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="justify-between font-normal border hover:text-white bg-noted border-white/10 w-[180px]">
                          <SelectValue>
                            <p
                              className={cn(
                                field.value ? "text-white" : "text-white/40"
                              )}
                            >
                              {field.value || "Select a folder"}
                            </p>
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-full text-white border bg-noted border-white/10 drop-shadow-lg">
                        <SelectGroup>
                          <SelectLabel>Folder List</SelectLabel>
                          {folderListz.length > 0 ? (
                            folderListz.map((item: FolderProps, idx) => (
                              <SelectItem value={item.title} key={idx}>
                                {item.title}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem
                              value=""
                              className="items-center justify-center text-white/30 focus:text-white/30 focus:bg-noted"
                            >
                              Empty Folder
                            </SelectItem>
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      <Tiptap />
    </>
  );
}
