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

  if (!teacherDiscipline) {
    throw new AppError(
      404,
      "Teacher-discipline not found",
      "Ensure to provide a valid teacher discipline id"
    );
  }
}

async function checkDuplicate(body: Omit<Exam, "pdfUrl">) {
  const exam = await repository.findTest(body);

  if(exam) {
    throw new AppError(
        409,
        "Exam already in system",
        "Ensure to provide a unique relation of name, category and teacher discipline"
    );
  }
}

export async function createExam(body: Exam) {
  await checkCategoryId(body.categoryId);
  await checkteacherDisciplineId(body.teacherDisciplineId);

  await checkDuplicate({
    name: body.name,
    categoryId: body.categoryId,
    teacherDisciplineId: body.teacherDisciplineId,
  });

  const exam = await repository.registerExam(body);
  return exam;
}

export async function getExamsByDisciplines() {
    const exams = await repository.findAllByDisciplines();

    return exams;
}

export async function getExamsByTeacher() {
    const exams = await repository.findAllByTeachers(); 

    return exams;
}
