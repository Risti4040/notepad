import type { Request, Response } from "express";
import * as queries from "../db/queries.js";
import { getAuth } from "@clerk/express";

//GET ONE NOTE
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.params;
    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid note ID" });
    }

    const note = await queries.getNoteById(id);

    if (!note || note.userId !== userId) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error getting note:", error);
    res.status(500).json({ error: "Failed to get note" });
  }
};

//GET USER NOTES
export const getUserNotes = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const notes = await queries.getNotesByUserId(userId);

    if (!notes) {
      return res.status(404).json({ error: "User notes not found" });
    }

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error getting user notes:", error);
    res.status(500).json({ error: "Failed to get user notes" });
  }
};

//CREATE NOTE
export const createNote = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ error: "Note title and content are required" });
    }

    const note = await queries.createNote({
      title,
      content,
      userId,
    });

    res.status(201).json(note);
  } catch (error) {
    console.error("Error creating a note:", error);
    res.status(500).json({ error: "Failed to create a note" });
  }
};

//UPDATE NOTE
export const updateNote = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { id } = req.params;
    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid note ID" });
    }
    const { title, content } = req.body;

    //CHECK IF NOTE EXISTS AND BELONGS TO THE USER
    const existingNote = await queries.getNoteById(id);
    if (!existingNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    if (userId !== existingNote.userId) {
      return res
        .status(403)
        .json({ error: "You can only update your own note" });
    }

    const note = await queries.updateNote(id, {
      title,
      content,
    });

    res.status(200).json(note);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Failed to update note" });
  }
};

//DELETE NOTE
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { id } = req.params;
    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid note ID" });
    }

    //CHECK IF NOTE EXISTS AND BELONGS TO THE USER
    const existingNote = await queries.getNoteById(id);
    if (!existingNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    if (userId !== existingNote.userId) {
      return res
        .status(403)
        .json({ error: "You can only delete your own note" });
    }

    await queries.deleteNote(id);

    res.status(200).json({ message: "Note deleted successfully." });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Failed to delete note" });
  }
};
