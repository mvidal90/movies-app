import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import { getMovies, getMovieById } from "@/util/api"

export const resetAction = createAction('movies/RESET_STATE')

export const getListMovies = createAsyncThunk(
    'movies/GET_MOVIES_LIST',
    async (page: number) => {
        const data = await getMovies(page)
        return data
    },
)

export const getMovieDetail = createAsyncThunk(
    'movies/GET_MOVIE_DETAIL',
    async (id: string) => {
        const data = await getMovieById(id)
        return data
    },
)