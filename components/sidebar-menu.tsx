"use client";

import { Button } from "@/components/ui/button";
import { folderList, recentNotes } from "@/note";
import { FolderProps } from "@/types";
import { useNoteStore } from "@/zustand/noteStore";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Archive,
  FileText,
  Folder,
  FolderOpen,
  FolderPlus,
  Plus,
  Search,
  Star,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import nowted from "../public/logo.png";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { generateRandomId } from "@/lib/utils";
const moreList: FolderProps[] = [
  {
    id: 1,
    icon: <Star className="w-4 h-4 mr-3" />,
    title: "Favorite",
  },
  {
    id: 2,
    icon: <Trash className="w-4 h-4 mr-3" />,
    title: "Trash",
  },
  {
    id: 3,
    icon: <Archive className="w-4 h-4 mr-3" />,
    title: "Archived Notes",
  },
];

export default function SidebarMenu() {
  const { selectFolder, selectNoteDetail, data } = useNoteStore();
  const [creatingFolderMode, setCreatingFolderMode] = useState(false);
  const [folderListz, setFolderListz] = useState<string[]>([]);
  const formSchema = z.object({
    foldername: z.string().max(20, {
      message: "Too Long",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foldername: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const folderObj = {
      id: generateRandomId(),
      foldername: values.foldername,
    };
    const updatedDataList = [...folderListz, folderObj];
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setCreatingFolderMode(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="space-y-8 w-[20rem] bg-noted text-white/60">
      <div className="px-5 pt-8 space-y-8">
        <div className="flex items-center justify-between w-full">
          <Image alt="Nowted Logo" src={nowted} width={110} height={40} />
          <Search className="w-5 h-5 text-white" />
        </div>
        <Button variant={"secondary"} className="w-full shadow-lg">
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </Button>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs ">Recents</p>
        <ul className="text-sm">
          {recentNotes.map((item, index) => (
            <li
              onClick={() => {
                selectNoteDetail(item);
                selectFolder(item.category, item.id);
              }}
              aria-current={index === data.recentSelectedIndex! - 1}
              role="button"
              key={item.id}
              className={
                "[&[aria-current='true']]:bg-indigo-600 [&[aria-current='true']]:text-white flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white  hover:bg-white/5"
              }
            >
              <FileText className="w-4 h-4 mr-3" />

              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="pb-2 pl-5 text-xs ">Folders</p>

          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setCreatingFolderMode(true)}
            className="mb-2 mr-2 bg-transparent border-none hover:bg-white/20"
          >
            <FolderPlus className="w-5 h-5 text-white/40" />
          </Button>
        </div>
        {creatingFolderMode && (
          <div className="flex items-center px-5">
            <FolderOpen className="w-4 h-4 mr-3 text-white" />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="foldername"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Folder name .."
                          {...field}
                          className="h-10 text-white bg-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="hidden">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        )}
        <ul className="text-sm">
          {folderList.map((item) => (
            <li
              onClick={() => selectFolder(item.title, data.recentSelectedIndex)}
              aria-current={item.title === data.title}
              key={item.title}
              className={
                "[&[aria-current='true']]:bg-white/5 [&[aria-current='true']]:text-white flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white  hover:bg-white/5"
              }
            >
              {item.title === data.title ? (
                <FolderOpen className="w-4 h-4 mr-3 " />
              ) : (
                <Folder className="w-4 h-4 mr-3" />
              )}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs ">More</p>
        <ul className="text-sm">
          {moreList.map((item, index) => (
            <li
              onClick={() => selectFolder(item.title, data.recentSelectedIndex)}
              aria-current={item.title === data.title}
              key={item.title}
              className="[&[aria-current='true']]:bg-white/5 [&[aria-current='true']]:text-white flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white  hover:bg-white/5"
            >
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
