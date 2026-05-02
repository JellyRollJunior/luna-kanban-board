import { prisma } from '@/db/prisma.js';

const getUsers = async () => {
    try {
        const data = await prisma.user.findMany();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (
    username: string,
    password: string,
    displayName: string
) => {
    try {
        const data = await prisma.user.create({
            data: {
                username,
                password,
                displayName,
            },
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export { getUsers, createUser };
