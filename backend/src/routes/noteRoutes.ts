import { Router } from "express";
import * as noteController from "../controllers/noteController.js";
import { requireUser } from "../middleware/requireUser.js";

const router = Router();

router.get("/", requireUser, noteController.getUserNotes);
router.get("/:id", requireUser, noteController.getNoteById);
router.post("/", requireUser, noteController.createNote);
router.put("/:id", requireUser, noteController.updateNote);
router.delete("/:id", requireUser, noteController.deleteNote);

export default router;
