import { Router } from "express";
import { getTasks, getTask, postTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import { validateReqBody } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", validateReqBody, postTask);
router.patch("/tasks/:id", validateReqBody, updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
