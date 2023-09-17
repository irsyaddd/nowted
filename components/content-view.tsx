"use client";

import EmptyState from "@/components/empty-state";
import { NoteProps } from "@/types";
import { useNoteStore } from "@/zustand/noteStore";
import { useEffect, useState } from "react";
import ContentFile from "./content-file";
import ContentForm from "./content-form";

export default function ContentView() {
  const { dataNoteDetail, createNoteMode, editNoteMode } = useNoteStore();
  const [isMounted, setIsMounted] = useState(false);

  const renderContentView = (dataNoteDetail: NoteProps) => {
    let content;

    if (!createNoteMode && !editNoteMode) {
      if (dataNoteDetail) {
        content = <ContentFile data={dataNoteDetail} />;
      } else {
        content = <EmptyState />;
      }
    } else {
      content = <ContentForm data={dataNoteDetail} />;
    }

    return content;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="content-view"
      className="flex flex-col flex-auto w-20 gap-8 p-12 text-white bg-noted"
    >
      {renderContentView(dataNoteDetail!)}
    </section>
  );
}
