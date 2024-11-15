import { Router } from "express";
import { projectController } from "../controllers/project.controller.js";

const router = Router()

router.post('/', projectController)

export default router