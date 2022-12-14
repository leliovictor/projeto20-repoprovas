import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/schema.middleware";
import { validateToken } from "../middlewares/token.middleware";

import * as controller from "../controllers/exam.controller";
import * as schema from "../schemas/exam.schema";

const examRouter = Router();

examRouter.use(validateToken);
examRouter.post(
  "/exams",
  validateSchemaMiddleware(schema.exam),
  controller.postExam
);
examRouter.get(
  "/exams/disciplines",
  controller.getExamsByDiscipline
);
examRouter.get("/exams/teachers",
controller.getExamsByTeacher)

export default examRouter;
