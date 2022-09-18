import { User, Test } from "@prisma/client";

export type Auth = Omit<User, 'id'>;

export type Exam = Omit<Test, 'id'>;