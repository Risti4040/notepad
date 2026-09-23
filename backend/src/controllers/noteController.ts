import type { Request, Response } from "express";
import * as model from "../models/noteModel.js";

export const getNotes = async (req: Request, res: Response) => {
  const result = await model.getAllNotes();
  res.json(result.rows);
};

export const getNote = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await model.getNote(id);
  res.json(result.rows);
};

export const createNote = async (req: Request, res: Response) => {
  model.createNote(req);
  res.status(201).json({
    success: true,
    message: "note posted",
  });
};

export const updateNote = async (req: Request, res: Response) => {
  model.updateNote(req);
  res.status(200).json({
    success: true,
    message: "note updated",
  });
};

export const deleteNote = async (req: Request, res: Response) => {
  const id = req.params.id;
  await model.deleteNote(id);
  res.status(204).send();
};
