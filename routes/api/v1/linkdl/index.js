import { Router } from "express";
import { index } from "./linkdl.controller.js";

const router = Router();

router.get("/", index);

export default router;
