"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Grid, Theme, useMediaQuery } from '@mui/material'

import GridScheleton from './GridScheleton'
import Pagination from '../pagination/Pagination'

import { AppDispatch, RootState } from '@/lib/store'
import { getFoundMovies, getListMovies } from '@/lib/movies/actions'
import { MoviesState } from '@/lib/movies/types'
import { MoviesGrid } from './MoviesGrid'

export const MoviesContainer = () => {
    const { moviesList, fetching, searchBy } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    
    useEffect(() => {
        dispatch(getListMovies(1))
    }, [])

    useEffect(() => {
        if (moviesList.page) {
            window.scroll({top: 0, behavior: "smooth",})
        }
    }, [moviesList.page])

    return (
        <Grid 
            container 
            rowSpacing={2} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                !fetching ?
                    <MoviesGrid
                        moviesList={moviesList.list}
                        isMobile={isMobile}
                    />
                :
                    <GridScheleton />
            }
            {
                moviesList.page ?
                    <Pagination 
                        currentPage={moviesList.page} 
                        totalPages={moviesList.totalPages} 
                        setNewPage={
                            (page: number) => 
                                dispatch( 
                                    !searchBy.enabled ? 
                                        getListMovies(page)
                                    : 
                                        getFoundMovies(page)
                                )
                        }/>
                : undefined
            }
        </Grid>
    )
};