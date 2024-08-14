"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Grid } from '@mui/material'

import Pagination from '../pagination/Pagination'

import { AppDispatch, RootState } from '@/lib/store'
import { getListMovies } from '@/lib/movies/actions'
import { MoviesState } from '@/lib/movies/types'
import GridScheleton from './GridScheleton'

export const MoviesGrid = () => {
    const { moviesList, fetching } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(getListMovies(1))
    }, [])
    
    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                !fetching ?
                    moviesList.list.map(
                        movie =>
                            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                                <Link href={`/detail/${movie.id}`}>
                                    <Box 
                                        component="img" 
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                        alt="" 
                                        sx={{
                                            width: "100%",
                                            minHeight: 400
                                        }} />
                                </Link>
                            </Grid>
                    )
                :
                    <GridScheleton />
            }
            <Pagination 
                currentPage={moviesList.page} 
                totalPages={moviesList.totalPages} 
                setNewPage={(page: number) => dispatch(getListMovies(page))}/>
        </Grid>
    )
};