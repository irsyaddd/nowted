import { useCurrentEditor } from "@tiptap/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ElementTagText = () => {
  const { editor } = useCurrentEditor();
  if (editor?.isActive("heading", { level: 1 })) {
    return "Heading 1";
  }
  if (editor?.isActive("heading", { level: 2 })) {
    return "Heading 2";
  }
  if (editor?.isActive("heading", { level: 3 })) {
    return "Heading 3";
  }

  return "Paragraph";
};
