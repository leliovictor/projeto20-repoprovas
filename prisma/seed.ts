import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedPrisma() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE users RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE disciplines RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE terms RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE "teachersDisciplines" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE teachers RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE categories RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE tests RESTART IDENTITY CASCADE`
  ]);

  await prisma.$transaction([
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (1)`,
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (2)`,
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (3)`,
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (4)`,
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (5)`,
    prisma.$executeRaw`INSERT INTO terms ("number") VALUES (6)`,
    prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('P1')`,
    prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('P2')`,
    prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('P3')`,
    prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('P2ch')`,
    prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Outras')`,
    prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Diego Pinho')`,
    prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Bruna Hamori')`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1)`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2)`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('React', 3)`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1)`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2)`,
    prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5)`,
    prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6)`
  ]);
}

seedPrisma();
