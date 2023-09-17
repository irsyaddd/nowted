import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NoteProps } from "@/types";
import {
  Archive,
  CalendarDays,
  Folder,
  MoreHorizontal,
  PenLine,
  Star,
  Trash,
} from "lucide-react";
import { useNoteStore } from "@/zustand/noteStore";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Tiptap from "./tiptapWithContext/tiptap";
import { getMonth } from "@/lib/utils";

export default function ContentFile({ data }: { data: NoteProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const { setEditNoteMode } = useNoteStore();
  const formatDate = () => {
    const today = new Date(data.createdAt);

    return today.getDate().toLocaleString();
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className="flex justify-between w-full">
        <p className="text-3xl font-semibold">{data.title}</p>
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
            <DropdownMenuItem onClick={() => setEditNoteMode(true)}>
              <PenLine className="w-4 h-4 mr-3" />
              Edit Note
            </DropdownMenuItem>
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
          <p>{formatDate()}</p>
        </div>
        <Separator className="bg-white/10" />
        <div className="flex text-sm">
          <div className="flex items-center gap-6 text-white/60">
            <Folder className="w-4 h-4" />
            <p className="w-28">Folder</p>
          </div>
          <p>{data.category}</p>
        </div>
      </div>
      <Tiptap content={data.content} />
    </>
  );
}
