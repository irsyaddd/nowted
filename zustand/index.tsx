import { folderList } from "@/note";
import { NoteProps } from "@/types";
import { create } from "zustand";

interface NoteState {
  data: {
    title: string;
    notes: NoteProps[];
    recentSelectedIndex?: number;
  };
  selectedMenu: string;
  selectNote: (params: string | { title: string; notes: NoteProps[] }) => void;
  selectMenu: (title: string, id?: number) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
  selectedMenu: folderList[0].title,
  data: {
    title: folderList[0].title,
    notes: folderList[0].notes,
    recentSelectedIndex: undefined,
  },
  selectMenu: (title, id) =>
    set((state) => ({
      selectedMenu: title,
      data: {
        ...state.data,
        recentSelectedIndex: id,
      },
    })),
  // If choosing from recent list, use the 'Category' to find the object
  selectNote: (params) => {
    if (typeof params === "string") {
      // If choosing from folder list, use the 'Title' to find the object
      const foundByTitle = folderList.find((folder) => folder.title === params);
      if (foundByTitle) {
        set((state) => ({
          data: {
            ...state.data,
            title: foundByTitle.title,
            notes: foundByTitle.notes,
          },
        }));
      } else {
        // Handle case when no folder is found with the specified title or category
        console.error(`No folder found with title or category "${params}".`);
      }
    } else {
      // Object with title and notes provided
      set(() => ({ data: params }));
    }
  },
}));
