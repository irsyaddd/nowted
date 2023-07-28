"use client";

import { Button } from "@/components/ui/button";
import { folderList, moreList, recentNotes } from "@/note";
import { FileText, Folder, FolderOpen, Plus, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import nowted from "../public/logo.png";
import { useNoteStore } from "@/zustand";

export default function SidebarMenu() {
  const selectNote = useNoteStore((state) => state.selectNote);
  const [category, setCategory] = useState("folder");
  const [currentRecentSelected, setCurrentRecentSelected] =
    useState<Number | null>(null);
  const [currentFolderSelected, setCurrentFolderSelected] =
    useState<Number | null>(0);
  const [currentSelected, setCurrentSelected] = useState<Number | null>(null);
  return (
    <section className="w-1/5 space-y-8 bg-noted">
      <div className="px-5 pt-5 space-y-8">
        <div className="flex items-center justify-between w-full">
          <Image alt="Nowted Logo" src={nowted} width={110} height={40} />
          <Search className="w-4 h-4 text-white" />
        </div>
        <Button variant={"secondary"} className="w-full">
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </Button>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs text-white/60">Recents</p>
        <ul className="text-sm">
          {recentNotes.map((item, index) => (
            <li
              onClick={() => setCurrentRecentSelected(index)}
              aria-current={index === currentRecentSelected}
              role="button"
              key={item.id}
              className={
                "[&[aria-current='true']]:bg-indigo-600 [&[aria-current='true']]:text-white flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white text-white/60 hover:bg-white/5"
              }
            >
              <FileText className="w-4 h-4 mr-3" />

              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs text-white/60">Folders</p>
        <ul className="text-sm">
          {folderList.map((item, index) => (
            <li
              onClick={() => {
                if (category !== "folder") {
                  setCategory("folder");
                  setCurrentFolderSelected(index);
                } else {
                  setCurrentFolderSelected(index);
                }
                selectNote(item);
              }}
              aria-current={index === currentFolderSelected}
              key={item.title}
              className={`${
                category === "folder" &&
                "[&[aria-current='true']]:bg-white/5 [&[aria-current='true']]:text-white"
              } flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white text-white/60 hover:bg-white/5`}
            >
              {currentFolderSelected === index ? (
                <FolderOpen className="w-4 h-4 mr-3" />
              ) : (
                <Folder className="w-4 h-4 mr-3" />
              )}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="px-5 pb-2 text-xs text-white/60">More</p>
        <ul className="text-sm">
          {moreList.map((item, index) => (
            <li
              onClick={() => {
                if (category !== "more") {
                  setCategory("more");
                  setCurrentSelected(index);
                } else {
                  setCurrentSelected(index);
                }
              }}
              aria-current={index === currentSelected}
              key={item.title}
              className={`${
                category === "more" &&
                "[&[aria-current='true']]:bg-white/5 [&[aria-current='true']]:text-white"
              } flex items-center px-5 py-3 transition duration-75 cursor-pointer hover:text-white text-white/60 hover:bg-white/5`}
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
