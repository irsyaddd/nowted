export type NoteProps = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  url: string;
  category: string;
};

export type FolderProps = {
  icon?: React.ReactNode;
  title: string;
  notes: NoteProps[];
};
