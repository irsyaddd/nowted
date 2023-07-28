import { Button } from "@/components/ui/button";
import Image from "next/image";
import nowted from "../public/logo.png";
import {
  Archive,
  FileText,
  Folder,
  FolderOpen,
  Plus,
  Search,
  Star,
  Trash,
} from "lucide-react";
import { useState } from "react";
import SidebarMenu from "@/components/sidebar-menu";

export default function Home() {
  return (
    <main className="flex h-screen">
      <SidebarMenu />
      <section className="flex items-center justify-around w-1/5 bg-noted-secondary">
        <Button variant={"secondary"}>Content List</Button>
      </section>
      <section className="flex items-center justify-around w-3/5 bg-noted">
        <Button variant={"secondary"}>Text Editor</Button>
      </section>
    </main>
  );
}
