import { Router } from "express";
import { index } from "./release.controller.js";

const router = Router();

router.get("/", index);

export default router;
