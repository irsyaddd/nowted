"use client";

import ContentList from "@/components/content-list";
import ContentView from "@/components/content-view";
import SidebarMenu from "@/components/sidebar-menu";
import { useNoteStore } from "@/zustand/noteStore";

export default function Home() {
  const { createFolderMode, setCreateFolderMode } = useNoteStore();
  return (
    <main className="flex min-h-screen">
      {createFolderMode && (
        <div
          className="absolute z-10 w-full h-screen bg-transparent"
          onClick={() => setCreateFolderMode(false)}
        />
      )}
      <SidebarMenu />
      <ContentList />
      <ContentView />
    </main>
  );
}
