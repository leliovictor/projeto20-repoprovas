import { Request, Response } from "express";

import * as service from "../services/auth.service";

export async function postSignup(_req: Request, res: Response) {
  const { email, password } = res.locals.body;

  await service.createUser({email, password});

  return res.sendStatus(201);
}

export async function postLogin(_req: Request, res: Response) {
  const { body } = res.locals;

  const token = await service.loginUser(body);

  return res.status(200).send({token: token});
}