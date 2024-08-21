"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { AppBar, Box, Container, IconButton, Theme, useMediaQuery } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

import {Searcher} from './Searcher'

import theme from '@/theme'

export const Navbar = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    const router = useRouter()

    return (
        <AppBar position="fixed" sx={{ padding: "0.875rem"}}>
            <Container fixed sx={{display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", flexFlow: "wrap" }}>
                <Box sx={{ display: "flex" }}>
                    <IconButton 
                        onClick={() => router.back()}
                        sx={{ width: "3rem", marginRight: "1rem" }}>
                        <ArrowBack />
                    </IconButton>
                    <Link href="/">
                        <Box component="h1" sx={{color: theme.palette.primary.main}}>Movies App</Box>
                    </Link>
                </Box>
                {
                    !isMobile ?
                        <Searcher />
                    : undefined
                }
            </Container>
        </AppBar>
    )
}