"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { getListGenres } from '@/lib/movies/actions'
import { MoviesState } from '@/lib/movies/types'
import { AppDispatch, RootState } from '@/lib/store'

interface GenresSelectorProps {
    genresValues: string
    handleChange: (p : SelectChangeEvent<Array<number>>) => void
}


export const GenresSelector = ({genresValues, handleChange} : GenresSelectorProps) => {
    const { genres } = useSelector<RootState>( state => state.movies) as MoviesState
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (!genres.length) {
            dispatch(getListGenres())
        }
    }, [genres])
    
    return (
        <FormControl sx={{ width: "100%" }} size="medium">
            <InputLabel id="with_genres">Géneros</InputLabel>
            <Select
                labelId="with_genres"
                id="with_genres"
                name="with_genres"
                value={ genresValues ? 
                    genresValues.split("|").map(g => parseInt(g, 10))
                    : []
                }
                label="Age"
                multiple
                onChange={handleChange}
            >
                {
                    genres.map(
                        item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    )
                }
            </Select>
            </FormControl>
    )
}