import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
    boxSizing: 'border-box',
});

globalStyle('*, *::before, *::after', {
    boxSizing: 'inherit',
});

globalStyle('body', {
    fontFamily:
        '--apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Helvetica Neue", sans-serif',
});
