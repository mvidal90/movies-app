import React from 'react'
import Link from 'next/link'

import { Box, Grid } from '@mui/material'

import { Movie } from '@/lib/movies/types'

export const MoviesGrid = ({
    moviesList,
    isMobile
} : {
    moviesList: Array<Pick<
    Movie,
    'adult' |
    'backdrop_path' |
    'id' |
    'original_language' |
    'original_title' |
    'overview' |
    'popularity' |
    'poster_path' |
    'release_date' |
    'title' |
    'video' |
    'vote_average' |
    'vote_count'
> & {
    'genres_id': Array<number>
}>, isMobile: boolean}) => {
    return (
        moviesList?.map(
            movie =>
                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}
                    justifyContent={"center"}
                    sx={{ display: "flex"}} >
                    <Link href={`/detail/${movie.id}`}>
                        <Box 
                            component="img" 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            sx={{
                                width: "100%",
                                minHeight: 400,
                                maxWidth: 100 * (isMobile ? 3 : 5)
                            }} />
                    </Link>
                </Grid>
        )
    )
}

