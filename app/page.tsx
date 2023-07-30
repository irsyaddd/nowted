"use client";

import SidebarMenu from "@/components/sidebar-menu";
import { Button } from "@/components/ui/button";
import { useNoteStore } from "@/zustand";
import { useEffect } from "react";

export default function Home() {
  // const selectedFolder = useNoteStore((state) => state.data);
  const { data, selectNote } = useNoteStore();

  useEffect(() => {
    console.log("recentSelectedIndex: ", data.recentSelectedIndex);
  }, [data.recentSelectedIndex]);
  return (
    <main className="flex h-screen">
      <SidebarMenu />
      <section className="justify-around w-[20rem] bg-noted-secondary px-5 pt-8">
        <p className="pb-8 text-xl text-white">{data.title}</p>
        <ul className="space-y-5">
          {data.notes.map((item, index) => (
            <li
              key={item.id}
              aria-current={item.id === data.recentSelectedIndex}
              className="p-5 space-y-3 text-white bg-white/[.03] [&[aria-current='true']]:bg-white/10 transition duration-150"
            >
              <p>{item.title}</p>
              <div className="flex gap-3 text-sm">
                <p className="text-white/40">{item.createdAt}</p>
                <p className="line-clamp-1 text-ellipsis text-white/60">
                  {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex items-center justify-around grow bg-noted">
        <Button variant={"secondary"}>Text Editor</Button>
      </section>
    </main>
  );
}
