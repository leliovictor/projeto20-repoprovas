import { Exam } from "../types/types";

import * as repository from "../repositories/exam.repository";

import { AppError } from "../middlewares/error.handler.middleware";

async function checkCategoryId(id: number) {
    const category = await repository.findCategoryById(id);

    if (!category) {
        throw new AppError(
            404,
            "Category not found",
            "Ensure to provide a valid category"
        );
    }
}

async function checkteacherDisciplineId(id: number) {
    const teacherDiscipline = await repository.findTeacherDisciplineById(id);

    if(!teacherDiscipline) {
        throw new AppError(
            404,
            "Teacher-discipline not found",
            "Ensure to provide a valid teacher discipline id"
    )};
}


export async function createExam(body: Exam) {
    await checkCategoryId(body.categoryId);
    await checkteacherDisciplineId(body.teacherDisciplineId);

    await repository.registerExam(body);
}