import ContentList from "@/components/content-list";
import ContentView from "@/components/content-view";
import SidebarMenu from "@/components/sidebar-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SidebarMenu />
      <ContentList />
      <ContentView />
    </main>
  );
}
