import React from "react";

export type NoteProps = {
  id: number;
  title: string;
  status: string;
  content: string;
  createdAt: string;
  category: string;
};

export type FolderProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};
