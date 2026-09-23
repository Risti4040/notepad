import express from "express";

import * as controller from "../controllers/noteController.js";

const router = express.Router();

router.get("/", controller.getNotes);
router.get("/:id", controller.getNote);
router.post("/", controller.createNote);
router.put("/:id", controller.updateNote);
router.delete("/:id", controller.deleteNote);

export default router;
