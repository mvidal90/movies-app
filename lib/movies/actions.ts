import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import { getMovies, getMovieById, getGenres } from "@/util/api"
import { RootState } from "../store"

export const resetAction = createAction('movies/RESET_STATE')
export const setParams = createAction<any>('movies/SET_PARAMS')

export const getListMovies = createAsyncThunk(
    'movies/GET_MOVIES_LIST',
    async (page: number, thunkApi) => {
        const {params} = (thunkApi.getState() as RootState).movies
        const data = await getMovies(params, page)
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

export const getListGenres = createAsyncThunk(
    'movies/GET_GENDERS_LIST',
    async () => {
        const data = await getGenres()
        return data
    },
)