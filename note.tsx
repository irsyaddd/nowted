import { Archive, Star, Trash } from "lucide-react";
import { FolderProps, NoteProps } from "./types";

export const recentNotes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 2,
    title: "Project proposal",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 3,
    title: "Travel itinerary",
    createdAt: "",
    url: "",
    category: "",
  },
];

export const notes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 2,
    title: "Project proposal",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 3,
    title: "Travel itinerary",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 4,
    title: "My Goal for The Next Year",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 5,
    title: "August 2023 Daily Expenses",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 6,
    title: "My Favorite Recipe",
    createdAt: "",
    url: "",
    category: "",
  },
];

export const folderList: FolderProps[] = [
  {
    title: "Personal",
    notes: [
      {
        id: 4,
        title: "My Goal for The Next Year",
        createdAt: "",
        url: "",
        category: "",
      },
      {
        id: 6,
        title: "My Favorite Recipe",
        createdAt: "",
        url: "",
        category: "",
      },
    ],
  },
  {
    title: "Work",
    notes: [
      {
        id: 2,
        title: "Project proposal",
        createdAt: "",
        url: "",
        category: "",
      },
    ],
  },
  {
    title: "Travel",
    notes: [
      {
        id: 3,
        title: "Travel itinerary",
        createdAt: "",
        url: "",
        category: "",
      },
    ],
  },
  {
    title: "Events",
    notes: [
      {
        id: 1,
        title: "Reflection on the Month of June",
        createdAt: "",
        url: "",
        category: "",
      },
    ],
  },
  {
    title: "Finances",
    notes: [
      {
        id: 5,
        title: "August 2023 Daily Expenses",
        createdAt: "",
        url: "",
        category: "",
      },
    ],
  },
];

export const moreList: FolderProps[] = [
  {
    icon: <Star className="w-4 h-4 mr-3" />,
    title: "Favorite",
    notes: [],
  },
  {
    icon: <Trash className="w-4 h-4 mr-3" />,
    title: "Trash",
    notes: [],
  },
  {
    icon: <Archive className="w-4 h-4 mr-3" />,
    title: "Archived Notes",
    notes: [],
  },
];
