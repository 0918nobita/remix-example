import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    const user = await prisma.contact.create({
        data: {
            first: 'Kodai',
            last: 'Matsumoto',
            createdAt: new Date(),
        },
    });

    console.log(user);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
