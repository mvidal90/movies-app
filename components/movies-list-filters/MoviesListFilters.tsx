"use client" 
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";

import { Searcher } from '../navbar/Searcher';
import { GenresSelector } from './GenresSelector';
import { RangueSelector } from './RangueSelector';

import { Button, Grid, SelectChangeEvent, Theme, useMediaQuery } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { AppDispatch, RootState } from '@/lib/store'
import { getListMovies, setParams } from '@/lib/movies/actions';
import { MoviesState } from '@/lib/movies/types';

export const MoviesListFilters = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    const { params: { 
        "vote_average.gte": min_vote_average, 
        "vote_average.lte": max_vote_average,
        with_genres, 
        primary_release_year: year
    } } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()
    const [showFilters, setShowFilters] = useState<boolean>(false)

    return (
        <Grid 
            container
            rowSpacing={2} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "2rem",  marginBottom: "2rem"}}>
            {
                isMobile ?
                    <Grid item xs={12}>
                        <Searcher />
                        <Button 
                            variant="contained" 
                            type='button'
                            onClick={() => setShowFilters(!showFilters)}
                            sx={{
                                marginTop: "1rem",
                                minHeight: "3rem", 
                                width: "100%",
                            }}>
                                {showFilters ? "Ocultar filtros" : "Ver filtros"}
                            </Button>
                    </Grid>
                : undefined
            }
            {
                showFilters || !isMobile ?
                    <>
                        <Grid item xs={12} sm={6} md={3} lg={2}>
                            <GenresSelector
                                genresValues={with_genres}
                                handleChange={
                                    ({target} : SelectChangeEvent<Array<number>>) => 
                                        dispatch(setParams({[target.name]: (target.value as Array<number>).join("|")}))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} lg={2}>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                    label="Año" 
                                    defaultValue={ year ? moment().set("year", year) : (year as null) }
                                    maxDate={moment()}
                                    views={['year']}
                                    onChange={(value) => 
                                        dispatch(setParams({"primary_release_year": value?.get("year")}))}
                                    sx={{ 
                                        height: "100%", 
                                        width: "100%",
                                    }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={2} >
                            <RangueSelector
                                values={[min_vote_average, max_vote_average]}
                                minValue={0}
                                maxValue={10}
                                setMinValue={n => {if (n < max_vote_average) dispatch(setParams({"vote_average.gte": n}))}}
                                setMaxValue={n => {if (n > min_vote_average) dispatch(setParams({"vote_average.lte": n}))}}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3} md={2} lg={2}>
                            <Button 
                                variant="contained" 
                                type='submit'
                                onClick={() => dispatch(getListMovies(1))}
                                sx={{ 
                                    height: "100%",
                                    minHeight: "3.5rem", 
                                    width: "100%",
                                }}>
                                    Buscar
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2} lg={2}>
                            <Button 
                                variant="outlined" 
                                type='submit' 
                                sx={{ 
                                    height: "100%",
                                    minHeight: "3.5rem", 
                                    width: "100%",
                                }}>
                                    Limpiar Filtros
                                </Button>
                        </Grid>
                    </>
                : undefined
            }
        </Grid>
    )
}
