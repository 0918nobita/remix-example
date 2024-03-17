import type { ReactNode } from 'react';

import * as styles from './style.css';

type Props = {
    links: Array<[number, ReactNode]>;
};

export function Sidebar({ links }: Props) {
    return (
        <nav className={styles.className}>
            {links.length === 0 ? (
                <p>No contacts</p>
            ) : (
                <ul className={styles.links}>
                    {links.map(([key, linkEl]) => (
                        <li className={styles.link} key={key}>
                            {linkEl}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
