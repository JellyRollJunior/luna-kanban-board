import type { User } from '@prisma/client';
import { prisma } from '@/db/prisma.js';

const getUsers = async (): Promise<User[]> => {
    try {
        const data = await prisma.user.findMany();
        return data;
    } catch (error) {
        throw new Error('Unable to get users');
    }
};

const createUser = async (
    username: string,
    password: string,
    displayName: string
): Promise<User> => {
    try {
        const data = await prisma.user.create({
            data: {
                username,
                password,
                displayName,
            },
        });
        return data;
    } catch (error) {
        throw new Error('Unable to create user');
    }
};

export { getUsers, createUser };
