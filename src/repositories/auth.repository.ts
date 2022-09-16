import { prisma } from "../config/database";

import { Auth } from "../types/types";

export async function findByEmail(email:string) {
    return await prisma.user.findUnique({where: {email}});
}

export async function registerUser(data: Auth) {
    return await prisma.user.create({data});
}