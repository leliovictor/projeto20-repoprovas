import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/schema.middleware";

import * as controller from "../controllers/auth.controller";
import * as schema from "../schemas/auth.schema";

const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchemaMiddleware(schema.signup),
  controller.postSignup
);

authRouter.post(
  "/login",
  validateSchemaMiddleware(schema.login),
  controller.postLogin
);

export default authRouter;
