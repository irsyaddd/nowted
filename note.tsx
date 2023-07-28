import { Archive, Star, Trash } from "lucide-react";
import { FolderProps, NoteProps } from "./types";

export const recentNotes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 2,
    title: "Project proposal",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    createdAt: "",
    url: "",
    category: "",
  },
  {
    id: 3,
    title: "Travel itinerary",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "",
  },
  {
    id: 2,
    title: "Project proposal",
    createdAt: "",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "",
  },
  {
    id: 3,
    title: "Travel itinerary",
    createdAt: "",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "",
  },
  {
    id: 4,
    title: "My Goal for The Next Year",
    createdAt: "",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "",
  },
  {
    id: 5,
    title: "August 2023 Daily Expenses",
    createdAt: "",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    url: "",
    category: "",
  },
  {
    id: 6,
    title: "My Favorite Recipe",
    createdAt: "",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
        createdAt: "12/12/2022",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        url: "",
        category: "",
      },
      {
        id: 6,
        title: "My Favorite Recipe",
        createdAt: "12/12/2092",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
        createdAt: "12/99/2022",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
        createdAt: "12/12/2088",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
        createdAt: "12/09/2022",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
        createdAt: "88/09/2023",
        content:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
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
