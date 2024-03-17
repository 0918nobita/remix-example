import { PrismaClient } from '@prisma/client';

export const getPrismaClient = (): PrismaClient => {
    const g = global as any;

    g.__singletons ??= {};
    g.__singletons.prisma ??= new PrismaClient();

    return g.__singletons.prisma;
};
