import {
    LoaderFunctionArgs,
    MetaFunction,
    TypedResponse,
    json,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { z } from 'zod';

import { getPrismaClient } from '../db.server';

const loaderDataSchema = z.object({
    contact: z.object({
        first: z.string(),
        last: z.string(),
    }),
});

type LoaderData = z.infer<typeof loaderDataSchema>;

const paramsSchema = z.object({
    contactId: z.preprocess(
        (v) => Number(v),
        z.number({ required_error: 'Number Required!' }),
    ),
});

export const loader = async (
    args: LoaderFunctionArgs,
): Promise<TypedResponse<LoaderData>> => {
    const parseResult = paramsSchema.safeParse(args.params);

    if (!parseResult.success) {
        return new Response('Bad Request', { status: 400 });
    }

    const prisma = getPrismaClient();

    const contact = await prisma.contact.findFirst({
        where: { id: parseResult.data.contactId },
    });

    if (contact === null) {
        return new Response('Not Found', { status: 404 });
    }

    return json({ contact });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const parseResult = loaderDataSchema.safeParse(data);

    if (!parseResult.success) {
        return [{ title: 'Error' }];
    }

    const { contact } = parseResult.data;

    return [
        {
            title: `${contact.first} ${contact.last}`,
        },
    ];
};

export default function Contacts() {
    const { contact } = useLoaderData<typeof loader>();

    if (!contact) {
        return <h2>404 Not Found</h2>;
    }

    return (
        <h2>
            {contact.first} {contact.last}
        </h2>
    );
}
