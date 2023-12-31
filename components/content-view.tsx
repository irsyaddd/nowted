"use client";

import React, { useEffect, useState } from "react";
import EmptyState from "@/components/empty-state";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Archive,
  CalendarDays,
  Folder,
  MoreHorizontal,
  Star,
  Trash,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNoteStore } from "@/zustand/noteStore";
import Tiptap from "./tiptapWithContext/tiptap";

export default function ContentView() {
  const { dataNoteDetail } = useNoteStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <section className="flex flex-col flex-auto w-20 gap-8 p-12 text-white bg-noted">
      {dataNoteDetail ? (
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
                  <span className="sr-only">Toggle theme</span>
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
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
