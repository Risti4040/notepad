import { eq } from "drizzle-orm";
import { db } from "./index.js";
import { notes, users, type NewUser, type NewNote } from "./schema.js";

//USER QUERIES
export const createUser = async (data: NewUser) => {
  const [user] = await db.insert(users).values(data).returning();
  return user;
};

export const getUserById = async (id: string) => {
  return await db.query.users.findFirst({ where: eq(users.id, id) });
};

export const updateUser = async (id: string, data: Partial<NewUser>) => {
  const existingUser = await getUserById(id);
  if (!existingUser) {
    throw new Error(`User with id ${id} not found`);
  }
  const [user] = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();
  return user;
};

export const upsertUser = async (data: NewUser) => {
  const [user] = await db
    .insert(users)
    .values(data)
    .onConflictDoUpdate({
      target: users.id,
      set: data,
    })
    .returning();
  return user;
};

//NOTE QUERIES
export const createNote = async (data: NewNote) => {
  const [note] = await db.insert(notes).values(data).returning();
  return notes;
};

export const getNoteById = async (id: string) => {
  return await db.query.notes.findFirst({
    where: eq(notes.id, id),
    with: { user: true },
  });
};

export const getNotesByUserId = async (userId: string) => {
  return db.query.notes.findMany({
    where: eq(notes.userId, userId),
    with: { user: true },
    orderBy: (notes, { desc }) => [desc(notes.createdAt)],
  });
};

export const updateNote = async (id: string, data: Partial<NewNote>) => {
  const existingNote = await getNoteById(id);
  if (!existingNote) {
    throw new Error(`Note with id ${id} not found`);
  }
  const [note] = await db
    .update(notes)
    .set(data)
    .where(eq(notes.id, id))
    .returning();
  return note;
};

export const deleteNote = async (id: string) => {
  const existingNote = await getNoteById(id);
  if (!existingNote) {
    throw new Error(`Note with id ${id} not found`);
  }
  const [note] = await db.delete(notes).where(eq(notes.id, id)).returning();
  return note;
};
