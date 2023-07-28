export type NoteProps = {
  id: number;
  title: string;
  createdAt: string;
  url: string;
  category: string;
};

export type FolderProps = {
  icon?: React.ReactNode;
  title: string;
  notes: NoteProps[];
};
