"use client";

import EmptyState from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Separator } from "@/components/ui/separator";
import { FolderProps, NoteProps } from "@/types";
import { useNoteStore } from "@/zustand/noteStore";
import {
  Archive,
  CalendarDays,
  Folder,
  MoreHorizontal,
  Star,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Tiptap from "./tiptapWithContext/tiptap";
import { generateRandomId, getDay, getMonth } from "@/lib/utils";
import { Input } from "./ui/input";
import { useCurrentEditor } from "@tiptap/react";

export default function ContentView() {
  const formSchema = z.object({
    filename: z.string().max(20, {
      message: "Too Long",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filename: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const noteObj = {
      id: generateRandomId(),
      title: values.filename === "" ? "Untitled" : values.filename,
      fileContent: content,
    };

    console.log("Data: ", noteObj);
    // const updatedDataList = [...folderListz, folderObj];
    // updateFolderList(updatedDataList);
    // localStorage.setItem("folderList", JSON.stringify(updatedDataList));
    // form.reset();
    // setCreateFolderMode(false);
  }
  const {
    folderListz,
    dataNoteDetail,
    createNoteMode,
    setCreateNoteMode,
    content,
  } = useNoteStore();
  const [isMounted, setIsMounted] = useState(false);

  const createdDate = () => {
    const today = new Date();
    const date = today.getDate().toString().padStart(2, "0");
    const month = today.getMonth() + 1;
    const year = today.getFullYear().toString();
    const day = getDay(today.getDay());
    const monthName = getMonth(month);
    const monthFixed = monthName?.slice(0, 3);

    return `${day}, ${date} ${monthFixed} ${year}`;
  };

  const renderContentView = (dataNoteDetail: NoteProps) => {
    let content;

    if (!createNoteMode) {
      if (dataNoteDetail) {
        content = (
          <>
            <div className="flex justify-between w-full">
              <p className="text-3xl font-semibold">{dataNoteDetail.title}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border rounded-full hover:bg-transparent border-white/40"
                  >
                    <MoreHorizontal className="w-6 h-6 text-white/40" />
                    <span className="sr-only">More menu Option</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#333333] border-[#333] p-2 space-y-2 text-white"
                >
                  <DropdownMenuItem>
                    <Star className="w-4 h-4 mr-3" />
                    Add to favorite
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Archive className="w-4 h-4 mr-3" />
                    Archived
                  </DropdownMenuItem>
                  <Separator className="bg-white/[0.07]" />
                  <DropdownMenuItem className="text-red-500">
                    <Trash className="w-4 h-4 mr-3" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex text-sm">
                <div className="flex items-center gap-6 text-white/60">
                  <CalendarDays className="w-4 h-4" />
                  <p className="w-28">Date</p>
                </div>
                <p className="underline">{dataNoteDetail.createdAt}</p>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex text-sm">
                <div className="flex items-center gap-6 text-white/60">
                  <Folder className="w-4 h-4" />
                  <p className="w-28">Folder</p>
                </div>
                <p className="underline">{dataNoteDetail.category}</p>
              </div>
            </div>
            <Tiptap content={dataNoteDetail.content} />
          </>
        );
      } else {
        content = <EmptyState />;
      }
    } else {
      content = (
        <>
          <div className="flex items-center justify-between w-s">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center justify-between w-full"
              >
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
                    className="text-white bg-white/10 hover:bg-white/20"
                    onClick={() => setCreateNoteMode(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
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
              <Select>
                <SelectTrigger className="justify-between font-normal border hover:text-white bg-noted border-white/10 w-[180px]">
                  <SelectValue placeholder="Select a folder" />
                </SelectTrigger>
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
            </div>
          </div>
          <Tiptap />
        </>
      );
    }

    return content;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="content-view"
      className="flex flex-col flex-auto w-20 gap-8 p-12 text-white bg-noted"
    >
      {renderContentView(dataNoteDetail!)}
    </section>
  );
}
