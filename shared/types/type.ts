export interface UserData {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteData {
  userId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
}
