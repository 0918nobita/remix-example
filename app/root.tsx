import { Link, Links, Meta, Outlet, Scripts } from '@remix-run/react';

import './global.css';
import { sidebar, sidebarLink, sidebarLinks } from './sidebar.css';

const Sidebar = (
    <nav className={sidebar}>
        <ul className={sidebarLinks}>
            <li className={sidebarLink}>
                <Link to="/contacts/1">Your Name</Link>
            </li>
            <li className={sidebarLink}>
                <Link to="/contacts/2">Your Friend</Link>
            </li>
        </ul>
    </nav>
);

export default function App() {
    return (
        <html>
            <head>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body>
                {Sidebar}
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
