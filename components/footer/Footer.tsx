"use client"
import { Box, Container, Paper } from '@mui/material'

import theme from '@/theme'

const Footer = () => {
    return (
        <Paper component="footer" sx={{ p: "0.5rem", alignSelf: "flex-end", width: "100%" }}>
            <Container fixed sx={{display: "flex", justifyContent: "end" }}>
                <Box component="h6" sx={{color: theme.palette.primary.main}}>Movies App - 2024</Box>
            </Container>
        </Paper>
    )
}

export default Footer