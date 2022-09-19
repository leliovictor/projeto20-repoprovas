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

export async function findAllByDisciplines() {
  const exams = await prisma.term.findMany({
    select: {
      number: true,
      discipline: {
        select: {
          name: true,
          TeacherDiscipline: {
            select: {
              test: {
                select: {
                  name: true,
                  pdfUrl: true,
                  category: { select: { name: true } },
                  teacherDiscipline: {
                    select: {
                      teacher: { select: { name: true } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return exams;
}

//teacher -> category -> prova -> name disciplina
export async function findAllByTeachers() {
  /* const exams = await prisma.teacher.findMany({
    select: {
      name: true,
      teacherDiscipline: {
        select: {
          test: {
            select: {
              category: { select: { name: true } },
              name: true,
              pdfUrl: true,
              teacherDiscipline: {
                select: {
                  discipline: { select: { name: true } },
                },
              },
            },
          },
        },
      },
    },
  }); 
  
  return exams;
  */

  return 'function doesnt work yet';
}
