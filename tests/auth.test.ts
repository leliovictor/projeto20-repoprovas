import supertest from "supertest";
import {prisma} from "../src/config/database";

import app from "../src/app";
import * as factory from "./factories/auth.factory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users";`;
});

describe('Sign up', () => {

    const newUser = factory.userData();

    it("Should return statusCode 201 when register a valid user", async () => {
        const result = await supertest(app).post("/signup").send({...newUser, confirmPassword: newUser.password});

        expect(result.status).toBe(201);
    });

    it("Should return statusCode 409 when email already exists", async ()=> {
        await supertest(app).post("/signup").send({...newUser, confirmPassword: newUser.password});
        
        const result = await supertest(app).post("/signup").send({...newUser, confirmPassword: newUser.password});

        expect(result.status).toBe(409);
    });
});

describe('Login', ()=> {

    const newUser = factory.userData();

    it("Should return statusCode 200 and a token when user login successfully", async () => {
        await supertest(app).post("/signup").send({...newUser, confirmPassword: newUser.password});

        const result = await supertest(app).post("/login").send(newUser);

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('token');
    });

    it("Should return statusCode 401 if user doesn't exist", async () => {
        const result = await supertest(app).post("/login").send(newUser);

        expect(result.status).toBe(401);
    });

    it("Should return statusCode 401 if password is incorrect", async () => {
        await supertest(app).post("/signup").send({...newUser, confirmPassword: newUser.password});

        const result = await supertest(app).post("/login").send({...newUser, password:'123Random'});

        expect(result.status).toBe(401);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});