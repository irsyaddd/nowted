import { Archive, Star, Trash } from "lucide-react";
import { FolderProps, NoteProps } from "./types";

export const recentNotes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    status: "stored",
    createdAt: "12/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Events",
  },
  {
    id: 2,
    title: "Project Proposal",
    status: "stored",
    createdAt: "04/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Work",
  },
  {
    id: 3,
    title: "My Goal for The Next Year",
    status: "stored",
    createdAt: "15/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Personal",
  },
  {
    id: 4,
    title: "Travel Itinerary",
    status: "stored",
    createdAt: "15/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Travel",
  },
];

export const notes: NoteProps[] = [
  {
    id: 1,
    title: "Reflection on the Month of June",
    status: "stored",
    createdAt: "12/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Events",
  },
  {
    id: 2,
    title: "Project Proposal",
    status: "stored",
    createdAt: "04/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Work",
  },
  {
    id: 3,
    title: "My Goal for The Next Year",
    status: "stored",
    createdAt: "15/09/2022",
    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available`,
    category: "Personal",
  },
  {
    id: 4,
    title: "Travel Itinerary",
    status: "stored",
    createdAt: "15/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Travel",
  },
  {
    id: 5,
    title: "Project Website Kapan Mulai",
    status: "stored",
    createdAt: "04/09/2022",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    category: "Work",
  },
];

export const folderList: FolderProps[] = [
  {
    id: "4",
    title: "Personal",
  },
  {
    id: "5",
    title: "Travel",
  },
  {
    id: "6",
    title: "Work",
  },
  {
    id: "7",
    title: "Events",
  },
];
