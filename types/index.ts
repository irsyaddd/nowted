import React from "react";

export type NoteProps = {
  id: string;
  title: string;
  status: string;
  content: string;
  createdAt: Date;
  category: string;
};

export type FolderProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};
