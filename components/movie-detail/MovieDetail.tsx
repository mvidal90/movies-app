"use client"
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Skeleton } from '@mui/material';

import { getMovieDetail } from '@/lib/movies/actions';
import { MoviesState } from '@/lib/movies/types';
import { AppDispatch, RootState } from '@/lib/store';

interface MovieDetailProps {
    id: string
}

export const MovieDetail = ({id} : MovieDetailProps) => {
    const { movieDetail, fetching } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [id])
    
    return (
        <>
            <Box component="h2" sx={{ marginBottom: "1rem"}}>{
                fetching ?
                    <Skeleton />
                :
                    movieDetail.title
                }
            </Box>
            <Box component="p" sx={{ marginBottom: "1rem"}}>{
                fetching ?
                    <Skeleton />
                :
                    movieDetail.overview
                }
            </Box>
        </>
    )
}