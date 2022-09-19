import { faker } from "@faker-js/faker";

export function userData(size: number = 4) {
    const email = faker.internet.email();
    const password = faker.internet.password(size);

    return {email, password};
}