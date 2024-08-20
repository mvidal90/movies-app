"use client"
import React from 'react'
import { useDispatch } from 'react-redux';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import { AppDispatch } from '@/lib/store';
import { getFoundMovies, setSearchBy } from '@/lib/movies/actions';

const Searcher = () => {

    const dispatch = useDispatch<AppDispatch>()
    return (
        <Paper
            component="form"
            onSubmit={(e) => {
                e.preventDefault()
                dispatch(getFoundMovies(1))
            }}
            sx={{ 
                p: '0.125rem 0.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                maxWidth: 400 
            }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar..."
                onChange={({target}) => dispatch(setSearchBy(target.value))}
                inputProps={{ 'aria-label': 'Buscar...' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '0.625rem' }} aria-label="buscar">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default Searcher