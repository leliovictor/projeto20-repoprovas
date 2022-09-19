import { Request, Response } from "express";

import * as service from "../services/exam.service";

export async function postExam(_req: Request, res: Response) {
    const {body} = res.locals;

    const exam = await service.createExam(body);

    return res.status(201).send(exam);
}

export async function getExamsByDiscipline(_req: Request, res: Response) {

    const examsOrderByDisciplines = await service.getExamsByDisciplines();

    return res.status(200).send(examsOrderByDisciplines);
}

export async function getExamsByTeacher(_req: Request, res: Response) {
    const examsOrderByTeachers = await service.getExamsByTeacher();

    return res.status(200).send(examsOrderByTeachers);
}