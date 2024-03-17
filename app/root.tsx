import { PrismaClient } from '@prisma/client';
import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    json,
    useLoaderData,
} from '@remix-run/react';

import './global.css';
import { Sidebar } from './components';

export const loader = async () => {
    const client = new PrismaClient();
    const contacts = await client.contact.findMany();
    await client.$disconnect();
    return json(contacts);
};

export default function App() {
    const contacts = useLoaderData<typeof loader>();

    return (
        <html>
            <head>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body>
                <Sidebar
                    links={contacts.map((contact) => [
                        contact.id,
                        <Link to={`/contacts/${contact.id}`}>
                            {contact.first} {contact.last}
                        </Link>,
                    ])}
                />
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
