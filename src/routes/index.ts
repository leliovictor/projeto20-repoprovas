import { Router } from "express";

import authRouter from "../routes/auth.router";

const router = Router();

router.use(authRouter);

export default router;
