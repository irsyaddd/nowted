"use client";

import SidebarMenu from "@/components/sidebar-menu";
import { Button } from "@/components/ui/button";
import { useNoteStore } from "@/zustand";

export default function Home() {
  const selectedFolder = useNoteStore((state) => state.data);
  return (
    <main className="flex h-screen">
      <SidebarMenu />
      <section className="w-1/5 text-white bg-noted-secondary">
        <p>{selectedFolder.title}</p>
        <ul>
          {selectedFolder.notes.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </section>
      <section className="flex items-center justify-around w-3/5 bg-noted">
        <Button variant={"secondary"}>Text Editor</Button>
      </section>
    </main>
  );
}
