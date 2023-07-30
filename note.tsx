import { Archive, Star, Trash } from "lucide-react";
import { FolderProps, NoteProps } from "./types";

export const recentNotes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    createdAt: "12/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Events",
  },
  {
    id: 2,
    title: "Project proposal",
    createdAt: "12/99/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Work",
  },
  {
    id: 3,
    title: "Travel itinerary",
    createdAt: "12/12/2088",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Travel",
  },
  {
    id: 4,
    title: "My Goal for The Next Year",
    createdAt: "12/04/1998",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Travel",
  },
];

export const notes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    createdAt: "12/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Events",
  },
  {
    id: 2,
    title: "Project proposal",
    createdAt: "12/99/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Work",
  },
  {
    id: 3,
    title: "Travel itinerary",
    createdAt: "12/12/2088",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Travel",
  },
  {
    id: 4,
    title: "My Goal for The Next Year",
    createdAt: "12/04/1998",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Travel",
  },
  {
    id: 5,
    title: "August 2023 Daily Expenses",
    createdAt: "88/09/2023",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Finances",
  },
  {
    id: 6,
    title: "My Favorite Recipe",
    createdAt: "12/12/2092",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "Personal",
  },
];

export const folderList: FolderProps[] = [
  {
    title: "Personal",
    notes: [
      {
        id: 6,
        title: "My Favorite Recipe",
        createdAt: "12/12/2092",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Personal",
      },
    ],
  },
  {
    title: "Work",
    notes: [
      {
        id: 2,
        title: "Project proposal",
        createdAt: "12/99/2022",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Work",
      },
    ],
  },
  {
    title: "Travel",
    notes: [
      {
        id: 3,
        title: "Travel itinerary",
        createdAt: "12/12/2088",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Travel",
      },
      {
        id: 4,
        title: "My Goal for The Next Year",
        createdAt: "12/04/1998",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Travel",
      },
    ],
  },
  {
    title: "Events",
    notes: [
      {
        id: 1,
        title: "Reflection on the Month of June",
        createdAt: "12/09/2022",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Events",
      },
    ],
  },
  {
    title: "Finances",
    notes: [
      {
        id: 5,
        title: "August 2023 Daily Expenses",
        createdAt: "88/09/2023",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "Finances",
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
