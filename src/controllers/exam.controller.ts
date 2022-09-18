import { Request, Response } from "express";

import * as service from "../services/exam.service";

export async function postExam(_req: Request, res: Response) {
    const {body} = res.locals;

    await service.createExam(body);

    return res.sendStatus(201);
}