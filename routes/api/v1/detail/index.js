import { Router } from "express";
import { index } from "./detail.controller.js";

const router = Router();

router.get("/", index);

export default router;
