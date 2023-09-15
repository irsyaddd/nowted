"use client";

import { folderList, notes } from "@/note";
import { FolderProps, NoteProps } from "@/types";
import { create } from "zustand";

async function wait(ms: number) {
  let timer: NodeJS.Timeout;
  return new Promise((resolve) => (timer = setTimeout(resolve, 1000))).finally(
    () => clearTimeout(timer)
  );
}

interface NoteState {
  data: {
    title: string;
    notes: NoteProps[];
    recentSelectedIndex?: number;
  };
  folderListz: FolderProps[];
  loading: boolean;
  createFolderMode: boolean;
  dataNoteDetail: NoteProps | undefined;
  setLoading: (loading: boolean) => void;
  setCreateFolderMode: (isCreateFolderMode: boolean) => void;
  selectFolder: (title: string, id?: number) => void;
  selectNoteDetail: (note: NoteProps) => void;
  getFolder: () => void;
  updateFolderList: (folder: FolderProps[]) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
  dataNoteDetail: undefined,
  createFolderMode: false,
  data: {
    title: folderList[0].title,
    notes: notes.filter((item) => item.category === folderList[0].title),
    recentSelectedIndex: undefined,
  },
  loading: false,
  folderListz: [],
  setLoading: (loading) => set({ loading }),
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
  getFolder: async () => {
    set({ loading: true });
    const savedDataList = localStorage.getItem("folderList");
    if (savedDataList !== null) {
      const parsedDataList = JSON.parse(savedDataList);
      set({ folderListz: parsedDataList });
    } else {
      set({ folderListz: [] });
    }
    await wait(3000);
    set({ loading: false });
  },
  updateFolderList: (updatedDataList: FolderProps[]) => {
    set({ folderListz: updatedDataList });
  },
  setCreateFolderMode: (status) => set({ createFolderMode: status }),
}));
