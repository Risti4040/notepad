import api from "./axios";
import type { UserData, NoteData } from "../../../shared/types/type";

//USERS API
export const syncUser = async (userData: Partial<UserData>) => {
  const { data } = await api.post("/users/sync", userData);
  console.log("syncUser data obtained");
  return data;
};

//NOTES API
export const getUserNotes = async () => {
  const { data } = await api.get("/notes");
  return data;
};

export const getNoteById = async (id: string) => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

export const createNote = async (noteData: NoteData) => {
  const { data } = await api.post("/notes", noteData);
  return data;
};

export const updateData = async (id: string, noteData: NoteData) => {
  const { data } = await api.put(`/notes/${id}`, noteData);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};
