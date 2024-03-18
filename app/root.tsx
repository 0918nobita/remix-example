import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    json,
    useLoaderData,
} from '@remix-run/react';

import { getPrismaClient } from './db.server';

import './global.css';
import { Sidebar } from './components';

export const loader = async () => {
    const prisma = getPrismaClient();

    const contacts = await prisma.contact.findMany();

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
                            {contact.first} {contact.last}{' '}
                            {contact.favorite && <span>★</span>}
                        </Link>,
                    ])}
                />
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
