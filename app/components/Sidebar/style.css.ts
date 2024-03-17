import { style } from '@vanilla-extract/css';

export const className = style({
    display: 'flex',
    flexDirection: 'column',
    width: '22rem',
    backgroundColor: '#f7f7f7',
});

export const links = style({
    selectors: {
        [`${className} > &`]: {
            padding: '0',
            margin: '0',
            listStyle: 'none',
        },
    },
});

export const link = style({
    selectors: {
        [`${links} > &`]: {
            margin: '0.25rem 0',
        },
    },
});
