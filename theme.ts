'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['greek'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            h1, h2, h3, h4, h5, h6, p, span {
                margin: 0;
            },
            h1 {
                font-size: 1.75rem;
            },
            h2 {
                font-size: 1.625rem;
            },
            h3 {
                font-size: 1.5rem;
            },
            h4 {
                font-size: 1.25em;
            },
            h5 {
                font-size: 1.125rem;
            },
            h6 {
                font-size: 1rem;
            },
          `,
        },
    },
});

export default theme;