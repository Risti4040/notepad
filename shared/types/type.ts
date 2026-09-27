export interface UserData {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAT: Date;
}

export interface NoteData {
  userId: string;
  id: string;
  createdAt: Date;
  updatedAT: Date;
  title: string;
  content: string | null;
}
