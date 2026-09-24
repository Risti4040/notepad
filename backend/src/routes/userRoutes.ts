import { requireUser } from "../middleware/requireUser.js";
import { Router } from "express";
import { syncUser } from "../controllers/userController.js";

const router = Router();

router.post("/sync", requireUser, syncUser);

export default router;
