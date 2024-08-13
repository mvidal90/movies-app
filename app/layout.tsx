import type { Metadata } from "next";

import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import Navbar from "@/components/navbar/Navbar";

import StoreProvider from "./StoreProvider";

import theme from "@/theme";

export const metadata: Metadata = {
    title: "Movie App",
    description: "Tu buscador de películas preferido.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box component="html" lang="en">
            <Box component="body" m={0}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <StoreProvider>
                        <Navbar />
                        {children}
                    </StoreProvider>
                </ThemeProvider>
            </Box>
        </Box>
    );
}
