import { Router } from "express";
import proccessMessage from "../controllers/chatController.js";

const router = Router();

router.post("/", proccessMessage);

export default router;
