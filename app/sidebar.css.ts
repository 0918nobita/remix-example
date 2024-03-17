import { style } from '@vanilla-extract/css';

export const sidebar = style({
    display: 'flex',
    flexDirection: 'column',
    width: '22rem',
    backgroundColor: '#f7f7f7',
});

export const sidebarLinks = style({
    selectors: {
        [`${sidebar} > &`]: {
            padding: '0',
            margin: '0',
            listStyle: 'none',
        },
    },
});

export const sidebarLink = style({
    selectors: {
        [`${sidebarLinks} > &`]: {
            margin: '0.25rem 0',
        },
    },
});
