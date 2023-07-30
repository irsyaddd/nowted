import ContentList from "@/components/content-list";
import SidebarMenu from "@/components/sidebar-menu";
import { FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen">
      <SidebarMenu />
      <ContentList />
      <section className="flex items-center justify-around px-5 grow bg-noted">
        <div className="space-y-3 text-center">
          <FileText
            className="w-20 h-20 m-auto text-xs text-white"
            strokeWidth={1}
          />
          <p className="text-3xl font-semibold text-white">
            Select a note to view
          </p>
          <p className="leading-6 text-white/60 w-[460px] text-sm">
            Choose a note from the list on the left to view its contents, or
            create a new note to add to your collection.
          </p>
        </div>
      </section>
    </main>
  );
}
