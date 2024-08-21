"use client"
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Box, Chip, Grid, Skeleton, Theme, useMediaQuery } from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import { AttachMoney, Autorenew, StarRate } from '@mui/icons-material';

import { getMovieDetail } from '@/lib/movies/actions';
import { MoviesState } from '@/lib/movies/types';
import { AppDispatch, RootState } from '@/lib/store';

import theme from '@/theme';

interface MovieDetailProps {
    id: string
}

export const MovieDetail = ({id} : MovieDetailProps) => {
    const { movieDetail, fetching } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [id])
    
    return (
        <Grid container spacing={4} direction={isMobile ? "column-reverse" : "row"}>
            <Grid item xs={12} md={6} lg={8} sx={{ marginTop: isMobile ? "2rem" : 0 }}>
                <Box component="h2" sx={{ marginBottom: "1rem"}}>
                    {
                        fetching ?
                            <Skeleton />
                        :
                            movieDetail?.title
                    }
                </Box>
                <Box sx={{ marginBottom: "1rem", display: "flex"}}>
                    {
                        fetching ?
                            <>
                                <Skeleton sx={{ m: "0.5rem", height: "2rem", width: "4rem" }} />
                                <Skeleton sx={{ m: "0.5rem", height: "2rem", width: "4rem" }} />
                                <Skeleton sx={{ m: "0.5rem", height: "2rem", width: "4rem" }} />
                                <Skeleton sx={{ m: "0.5rem", height: "2rem", width: "4rem" }} />
                            </>
                        :
                        movieDetail?.genres?.map(
                            genre => 
                                <Chip 
                                    key={genre.id} 
                                    label={genre.name} 
                                    color="primary" 
                                    variant="outlined"
                                    sx={{ m: "0.5rem" }} />
                        )
                    }
                </Box>
                <Box component="p" sx={{ marginBottom: "1rem"}}>
                    {
                        fetching ?
                            <Skeleton sx={{ height: "15rem" }} />
                        :
                            movieDetail?.overview
                    }
                </Box>
                <Box sx={{ 
                    borderRadius: "1rem",
                    border: `1px solid ${theme.palette.primary.dark}`,
                    marginBottom: "1rem", 
                    p: "3rem"
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            {
                                fetching ?
                                    <Skeleton sx={{ height: "1.5rem" }} />
                                :
                                    <Box sx={{ display: "flex" }}>
                                        <CalendarIcon sx={{ marginRight: "1rem" }}/>
                                        <Box component={"p"}>{moment(movieDetail?.release_date).format("DD/MM/YYYY")}</Box>
                                    </Box>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {
                                fetching ?
                                    <Skeleton sx={{ height: "1.5rem" }} />
                                :
                                <Box sx={{ display: "flex" }}>
                                    <StarRate sx={{ marginRight: "1rem" }}/>
                                    <Box component={"p"}>{movieDetail?.vote_average?.toFixed(2)}</Box>
                                </Box>
                                    
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {
                                fetching ?
                                    <Skeleton sx={{ height: "1.5rem" }} />
                                :
                                    <Box sx={{ display: "flex" }}>
                                        <AttachMoney sx={{ marginRight: "1rem" }}/>
                                        <Box component={"p"}>{
                                            movieDetail?.budget?.toString()
                                                .replace(/\D/g, "")
                                                .replace(/([0-9])([0-9]{3})$/, "$1.$2")
                                                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")
                                                .concat(",00")
                                        }</Box>
                                    </Box>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {
                                fetching ?
                                    <Skeleton sx={{ height: "1.5rem" }} />
                                :
                                    <Box sx={{ display: "flex" }}>
                                        <Autorenew sx={{ marginRight: "1rem" }}/>
                                        <Box component={"p"}>{movieDetail?.status}</Box>
                                    </Box>
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
                {
                    fetching ?
                        <Skeleton 
                            sx={{
                                width: "100%",
                                maxWidth: 100 * (isMobile ? 3 : 5),
                                height: "100%",
                                minHeight: 100 * (isMobile ? 4.5 : 6)
                            }}
                        />
                    :
                        <Box 
                            component="img" 
                            src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`} 
                            alt={movieDetail?.title}
                            sx={{
                                width: "100%",
                                maxWidth: 100 * (isMobile ? 3 : 5)
                            }}>
                        </Box>
                }
            </Grid>
        </Grid>
    )
}