/*
  Warnings:

  - A unique constraint covering the columns `[name,categoryId,teacherDisciplineId]` on the table `tests` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tests_name_categoryId_teacherDisciplineId_key" ON "tests"("name", "categoryId", "teacherDisciplineId");
