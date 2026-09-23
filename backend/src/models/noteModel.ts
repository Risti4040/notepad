import express from "express";
import pool from "../config/db.js";

export const getAllNotes = () => {
  return pool.query("Select * From notes ORDER BY id");
};

export const getNote = (id) => {
  return pool.query("Select * From notes WHERE id=$1", [id]);
};

export const createNote = async (req: express.Request) => {
  const { title, note } = req.body;
  await pool.query("INSERT INTO notes (title, note) VALUES( $1, $2)", [
    title,
    note,
  ]);
};

export const updateNote = async (req: express.Request) => {
  const { title, note } = req.body;
  const id = req.params.id;
  await pool.query("UPDATE notes SET title= $1, note=$2 WHERE id=$3", [
    title,
    note,
    id,
  ]);
};

export const deleteNote = (id) => {
  pool.query("DELETE From notes WHERE id=$1", [id]);
};
