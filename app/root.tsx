import { Link, Links, Meta, Outlet, Scripts } from '@remix-run/react';

import './global.css';
import * as sidebarStyles from './sidebar.css';

const sidebar = (
    <nav className={sidebarStyles.sidebar}>
        <ul className={sidebarStyles.links}>
            <li className={sidebarStyles.link}>
                <Link to="/contacts/1">Your Name</Link>
            </li>
            <li className={sidebarStyles.link}>
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
                {sidebar}
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
