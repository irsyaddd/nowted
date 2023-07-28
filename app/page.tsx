"use client";

import SidebarMenu from "@/components/sidebar-menu";
import { Button } from "@/components/ui/button";
import { useNoteStore } from "@/zustand";

export default function Home() {
  const selectedFolder = useNoteStore((state) => state.data);
  return (
    <main className="flex h-screen">
      <SidebarMenu />
      <section className="flex items-center justify-around w-[20rem] bg-noted-secondary">
        <Button variant={"secondary"}>Content List</Button>
      </section>
      <section className="flex items-center justify-around grow bg-noted">
        <Button variant={"secondary"}>Text Editor</Button>
      </section>
    </main>
  );
}
