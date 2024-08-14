import React from 'react'
import { Box, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    setNewPage: (page: number) => void
}

const Pagination = ({
    currentPage,
    totalPages,
    setNewPage
} : PaginationProps) => {
    return (
        <Box sx={{
            display: "flex",
            margin: "1rem",
            justifyContent: "center",
            width: "100%"
        }}>
            <IconButton 
                color="primary"
                disabled={currentPage <= 1}
                onClick={() => setNewPage(currentPage - 1)}
                aria-label="Ir a la página anterior">
                <ChevronLeft sx={{ width: 40 }} />
            </IconButton>
            <Box component="span" sx={{alignItems: "center", display: "flex", margin: "1rem"}}>{currentPage}</Box>
            <IconButton 
                color="primary"
                disabled={currentPage === totalPages}
                onClick={() => setNewPage(currentPage + 1)}
                aria-label="Ir a la siguiente página">
                <ChevronRight sx={{ width: 40 }} />
            </IconButton>
        </Box>
    )
}

export default Pagination