"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { Grid, Skeleton } from '@mui/material'

import { actions as actionsMovies } from '@/lib/movies/reducer'
import { AppDispatch, RootState } from '@/lib/store'
import { MoviesState } from '@/lib/movies/types'

export const MoviesGrid = () => {
    const { moviesList, fetching } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(actionsMovies.getListMovies())
    }, [])
    
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                !fetching ?
                    moviesList.list.map(
                        movie =>
                            <Grid key={movie.id} item xs={12} md={4} lg={3}>
                                <Link href={`/detail/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width={"100%"} />
                                </Link>
                            </Grid>
                    )
                :
                    <>
                        "Loading..."
                    </>
            }

        </Grid>
    )
};