import { folderList } from "@/note";
import { NoteProps } from "@/types";
import { create } from "zustand";

interface NoteState {
  data: {
    title: string;
    notes: NoteProps[];
  };
  selectNote: (noteObject: { title: string; notes: NoteProps[] }) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
  data: { title: folderList[0].title, notes: folderList[0].notes },
  selectNote: (noteObject) => set(() => ({ data: noteObject })),
}));
