"use client";

import { NoteProps } from "@/types";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Tiptap(data: NoteProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `${data.content}`,
  });
  return (
    <div>
      <EditorContent editor={editor} className="focus:ring-red-400" />
    </div>
  );
}
