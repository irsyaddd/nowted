"use client";

import { folderList, notes } from "@/note";
import { NoteProps } from "@/types";
import { create } from "zustand";

interface NoteState {
  data: {
    title: string;
    notes: NoteProps[];
    recentSelectedIndex?: number;
  };
  dataNoteDetail: NoteProps | undefined;
  selectFolder: (title: string, id?: number) => void;
  selectNoteDetail: (note: NoteProps) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
  dataNoteDetail: undefined,
  data: {
    title: folderList[0].title,
    notes: notes.filter((item) => item.category === folderList[0].title),
    recentSelectedIndex: undefined,
  },
  selectFolder: (title, id) =>
    set((state) => ({
      data: {
        ...state.data,
        title,
        notes: notes.filter((item) => item.category === title),
        recentSelectedIndex: id,
      },
    })),
  selectNoteDetail: (note) => set(() => ({ dataNoteDetail: note })),
}));
