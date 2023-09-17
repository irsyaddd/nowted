"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { generateRandomId } from "@/lib/utils";
import { recentNotes } from "@/note";
import { FolderProps } from "@/types";
import { useNoteStore } from "@/zustand/noteStore";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Archive,
  FileText,
  Folder,
  FolderOpen,
  FolderPlus,
  Loader2,
  PenSquare,
  Plus,
  Search,
  Star,
  Trash,
  XSquare,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import nowted from "../public/logo.png";
import { Input } from "./ui/input";
const moreList: FolderProps[] = [
  {
    id: "1",
    icon: <Star className="w-4 h-4 mr-3" />,
    title: "Favorite",
  },
  {
    id: "2",
    icon: <Trash className="w-4 h-4 mr-3" />,
    title: "Trash",
  },
  {
    id: "3",
    icon: <Archive className="w-4 h-4 mr-3" />,
    title: "Archived Notes",
  },
];

export default function SidebarMenu() {
  const {
    selectFolder,
    selectNoteDetail,
    data,
    getFolder,
    getNote,
    loading,
    folderListz,
    noteListz,
    updateFolderList,
    createFolderMode,
    setCreateFolderMode,
    setCreateNoteMode,
  } = useNoteStore();
  const [isMounted, setIsMounted] = useState(false);
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
    const folderObj = {
      id: generateRandomId(),
      title: values.foldername === "" ? "New Folder" : values.foldername,
    };
    const updatedDataList = [...folderListz, folderObj];
    updateFolderList(updatedDataList);
    localStorage.setItem("folderList", JSON.stringify(updatedDataList));
    form.reset();
    setCreateFolderMode(false);
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCreateNoteMode(false);
        setCreateFolderMode(false);
        form.reset();
      }
    },
    [form, setCreateFolderMode, setCreateNoteMode]
  );

  const createFolderByKey = useCallback(
    (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "/") {
        event.preventDefault();
        setCreateFolderMode(true);
      }
    },
    [setCreateFolderMode]
  );

  const createNoteByKey = useCallback(
    (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === ".") {
        event.preventDefault();
        selectFolder("", undefined);
        setCreateNoteMode(true);
      }
    },
    [setCreateNoteMode, selectFolder]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", createFolderByKey);
    document.addEventListener("keydown", createNoteByKey);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", createFolderByKey);
      document.removeEventListener("keydown", createNoteByKey);
    };
  }, [handleKeyDown, createFolderByKey, createNoteByKey]);

  const renderNote = () => {
    let note;
    if (!loading) {
      if (noteListz.length > 0) {
        note = noteListz.map((item, index) => (
          <li
            onClick={() => {
              selectNoteDetail(item);
              selectFolder(item.category, item.id);
              setCreateNoteMode(false);
            }}
            aria-current={index.toString() === data.recentSelectedIndex!}
            role="button"
            key={item.id}
            className={
              "[&[aria-current='true']]:bg-indigo-600 [&[aria-current='true']]:text-white flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white  hover:bg-white/5"
            }
          >
            <FileText className="w-4 h-4 mr-3" />
            {item.title}
          </li>
        ));
      } else {
        note = (
          <div className="px-5">
            <div className="flex flex-col items-center justify-center w-full h-48 text-center bg-transparent">
              <PenSquare
                className="w-10 h-10 pb-2 text-xs text-white"
                strokeWidth={1}
              />
              <p className="text-lg font-semibold text-white">Create a note</p>
              <div className="text-xs leading-6">
                Your recent note will appear here
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div>
                    <span className="p-1 rounded-sm bg-white/10">
                      ⌘ Command
                    </span>{" "}
                    <span className="p-1 rounded-sm bg-white/10">.</span>
                  </div>
                  or
                  <div>
                    <span className="p-1 rounded-sm bg-white/10">Ctrl</span>{" "}
                    <span className="p-1 rounded-sm bg-white/10">.</span>
                  </div>
                </div>
                to create a note
              </div>
            </div>
          </div>
        );
      }
    } else {
      note = (
        <div className="px-5">
          <div className="flex flex-col items-center justify-center w-full h-48 text-center bg-transparent">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        </div>
      );
    }

    return note;
  };

  const renderFolder = () => {
    let folder;
    if (!loading) {
      if (folderListz.length > 0) {
        folder = folderListz.map((item) => (
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
        ));
      } else {
        folder = createFolderMode ? null : (
          <div className="px-5">
            <div className="flex flex-col items-center justify-center w-full h-48 text-center bg-transparent">
              <FolderPlus
                className="w-10 h-10 pb-2 text-xs text-white"
                strokeWidth={1}
              />
              <p className="text-lg font-semibold text-white">
                Create a folder
              </p>
              <div className="text-xs leading-6">
                Organize your note into separate folder
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div>
                    <span className="p-1 rounded-sm bg-white/10">
                      ⌘ Command
                    </span>{" "}
                    <span className="p-1 rounded-sm bg-white/10">/</span>
                  </div>
                  or
                  <div>
                    <span className="p-1 rounded-sm bg-white/10">Ctrl</span>{" "}
                    <span className="p-1 rounded-sm bg-white/10">/</span>
                  </div>
                </div>
                to create a folder
              </div>
            </div>
          </div>
        );
      }
    } else {
      folder = (
        <div className="px-5">
          <div className="flex flex-col items-center justify-center w-full h-48 text-center bg-transparent">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        </div>
      );
    }

    return folder;
  };

  useEffect(() => {
    setIsMounted(true);
    getFolder();
    getNote();
  }, [getFolder, getNote]);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="space-y-8 w-[20rem] bg-noted text-white/60">
      <div className="px-5 pt-8 space-y-8">
        <div className="flex items-center justify-between w-full">
          <Image alt="Nowted Logo" src={nowted} width={110} height={40} />
          <Search className="w-5 h-5 text-white" />
        </div>
        <Button
          variant={"secondary"}
          className="w-full text-white bg-indigo-600 shadow-lg hover:bg-indigo-500"
          onClick={() => setCreateNoteMode(true)}
        >
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </Button>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs ">Recents</p>
        <ul className="text-sm">{renderNote()}</ul>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="pb-2 pl-5 text-xs ">Folders</p>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={(e) => {
              setCreateFolderMode(!createFolderMode);
            }}
            className="mb-2 mr-2 bg-transparent border-none hover:bg-white/20"
          >
            {!createFolderMode ? (
              <FolderPlus className="w-5 h-5 text-white/40" />
            ) : (
              <XSquare className="w-5 h-5 text-white/40" />
            )}
          </Button>
        </div>
        {createFolderMode && (
          <div className="flex items-center px-5 py-3">
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
                          {...form.register("foldername")}
                          placeholder="Folder name .."
                          className="h-10 text-white bg-transparent"
                          {...field}
                          autoFocus
                          autoComplete="off"
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
        <ul className="text-sm">{renderFolder()}</ul>
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
