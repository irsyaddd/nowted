"use client";

import { notes } from "@/note";
import { FolderProps, NoteProps } from "@/types";
import { create } from "zustand";

async function wait(ms: number) {
  let timer: NodeJS.Timeout;
  return new Promise((resolve) => (timer = setTimeout(resolve, ms))).finally(
    () => clearTimeout(timer)
  );
}

interface NoteState {
  data: {
    title: string;
    notes: NoteProps[];
    recentSelectedIndex?: string;
  };
  content: string;
  folderListz: FolderProps[];
  noteListz: NoteProps[];
  editNoteMode: boolean;
  loading: boolean;
  createFolderMode: boolean;
  createNoteMode: boolean;
  dataNoteDetail: NoteProps | undefined;
  setLoading: (loading: boolean) => void;
  setCreateFolderMode: (isCreateFolderMode: boolean) => void;
  setCreateNoteMode: (isCreateNodeMode: boolean) => void;
  setEditNoteMode: (status: boolean) => void;
  selectFolder: (title: string, id?: string) => void;
  selectNoteDetail: (note: NoteProps) => void;
  getFolder: () => void;
  getNote: () => void;
  setContent: (content: string) => void;
  updateFolderList: (folder: FolderProps[]) => void;
  updateNoteList: (note: NoteProps[]) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
  dataNoteDetail: undefined,
  createFolderMode: false,
  createNoteMode: false,
  editNoteMode: false,
  content: "",
  data: {
    title: "",
    notes: [],
    recentSelectedIndex: undefined,
  },
  loading: false,
  folderListz: [],
  noteListz: [],
  setEditNoteMode: (status) => set({ editNoteMode: status }),
  setContent: (content) => set({ content }),
  setCreateNoteMode: (status) => set({ createNoteMode: status }),
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
      set((state) => ({
        data: {
          ...state.data,
          title: parsedDataList[0].title,
          notes: notes.filter(
            (item) => item.category === parsedDataList[0].title
          ),
          recentSelectedIndex: undefined,
        },
      })),
        set({ folderListz: parsedDataList });
    } else {
      set({ folderListz: [] });
    }
    await wait(1000);
    set({ loading: false });
  },
  getNote: async () => {
    set({ loading: true });
    const savedDataList = localStorage.getItem("noteList");
    if (savedDataList !== null) {
      const parsedDataList = JSON.parse(savedDataList);
      set((state) => ({
        data: {
          ...state.data,
          title: parsedDataList[0].title,
          notes: notes.filter(
            (item) => item.category === parsedDataList[0].title
          ),
          recentSelectedIndex: undefined,
        },
      })),
        set({ noteListz: parsedDataList });
    } else {
      set({ noteListz: [] });
    }
    await wait(2000);
    set({ loading: false });
  },
  updateFolderList: (updatedDataList: FolderProps[]) => {
    set({ folderListz: updatedDataList });
  },
  updateNoteList: (newNoteList: NoteProps[]) => {
    set({ noteListz: newNoteList });
  },
  setCreateFolderMode: (status) => set({ createFolderMode: status }),
}));
