import { faker } from '@faker-js/faker';

const createRandomUser = () => {
    return {
        username : faker.internet.userName(),
        userId : faker.string.uuid(),
        email : faker.internet.email(),
        avatar : faker.image.avatar(),
        password : faker.internet.password(),
        birthdate : faker.date.birthdate(),
        registeredAt : faker.date.anytime()  
    };
};

export const generate = () => {
    const users = [];

    while (users.length < 50) {
        users.push(createRandomUser());
    }
    return users;
};

