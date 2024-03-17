import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

import { getPrismaClient } from '../db.server';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.contactId, 'Missing contactId param');

    const prisma = getPrismaClient();

    const contact = await prisma.contact.findFirst({
        where: { id: parseInt(params.contactId) },
    });

    if (contact === null) {
        return new Response(null, { status: 404, statusText: 'Not Found' });
    }

    return json({ contact });
};

export default function Contacts() {
    const { contact } = useLoaderData<typeof loader>();

    return (
        <h2>
            {contact.first} {contact.last}
        </h2>
    );
}

export function CatchBoundary() {
    return <h2>Error</h2>;
}
