import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import { getMovies, getSearchMovies, getMovieById, getGenres } from "@/util/api"
import { RootState } from "../store"

export const resetAction = createAction('movies/RESET_STATE')
export const setParams = createAction<Partial<{
    "vote_average.gte": number
    "vote_average.lte": number
    with_genres: string
    primary_release_year: number | null
}>>('movies/SET_PARAMS')
export const resetParams = createAction('movies/RESET_PARAMS')
export const setSearchBy = createAction<string>('movies/SET_SEARCH_BY')

export const getListMovies = createAsyncThunk(
    'movies/GET_MOVIES_LIST',
    async (page: number, thunkApi) => {
        const {params} = (thunkApi.getState() as RootState).movies
        const data = await getMovies(params, page)
        return data
    },
)

export const getFoundMovies = createAsyncThunk(
    'movies/GET_SEARCH_MOVIES_LIST',
    async (page: number, thunkApi) => {
        const {searchBy: {query}} = (thunkApi.getState() as RootState).movies
        const data = await getSearchMovies({query}, page)
        return data
    },
)

export const getMovieDetail = createAsyncThunk(
    'movies/GET_MOVIE_DETAIL',
    async (id: string) => {
        const data = await getMovieById(id)
        const dataRecommendations = await getMovies({
            "vote_average.gte": 7,
            "vote_average.lte": 10,
            primary_release_year: null,
            with_genres: (
                data?.genres?.map( (obj : {id: number, name: string}) => obj.id).join(",") || ""
            )
        }, 1)
        return {
            ...data,
            recommendations: dataRecommendations.results.filter( (movie : any) => movie.id !== data.id).slice(0, 4)
        }
    },
)

export const getListGenres = createAsyncThunk(
    'movies/GET_GENDERS_LIST',
    async () => {
        const data = await getGenres()
        return data
    },
)