import { prisma } from "../config/database";

import { Exam } from "../types/types";

export async function findCategoryById(id: number) {
  return await prisma.category.findUnique({ where: { id } });
}

export async function findTeacherDisciplineById(id: number) {
  return await prisma.teacherDiscipline.findUnique({ where: { id } });
}

export async function findTest(data: Omit<Exam, "pdfUrl">) {
  return await prisma.test.findFirst({ where: { ...data } });
}

export async function registerExam(data: Exam) {
  return await prisma.test.create({ data });
}
