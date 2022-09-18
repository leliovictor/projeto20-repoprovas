import { Router } from "express";

import authRouter from "../routes/auth.router";
import examRouter from "../routes/exam.router";

const router = Router();

router.use(authRouter);
router.use(examRouter);

export default router;
