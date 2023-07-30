"use client";
import ContentList from "@/components/content-list";
import EmptyState from "@/components/empty-state";
import SidebarMenu from "@/components/sidebar-menu";
import { useNoteStore } from "@/zustand/noteStore";

export default function Home() {
  const { dataNoteDetail } = useNoteStore();
  return (
    <main className="flex min-h-screen">
      <SidebarMenu />
      <ContentList />
      <section className="flex items-center justify-around px-5 grow bg-noted">
        {dataNoteDetail ? (
          <p className="text-white">{dataNoteDetail.title}</p>
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
}
