import {
    createReducer,
} from '@reduxjs/toolkit'

import { getListGenres, getListMovies, getMovieDetail, resetAction, setParams } from './actions'
import { MoviesState } from './types'

export const INITIAL_STATE: MoviesState = {
    fetching: true,
    genres: [],
    movieDetail: {},
    moviesList: {
        list: [],
        page: 0,
        totalPages: 0
    },
    params: {
        "vote_average.gte": 0,
        "vote_average.lte": 10,
        with_genres: "",
        primary_release_year: null
    }
}

export const reducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(resetAction, () => INITIAL_STATE)
        .addCase(setParams, (state, action) => ({
            ...state,
            params: {
                ...state.params,
                ...action.payload
            }
        }))
        .addCase(getListMovies.fulfilled, (state, action) => ({
            ...state,
            moviesList: {
                list: action.payload.results,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
            }
        }))
        .addCase(getMovieDetail.fulfilled, (state, action) => ({
            ...state,
            movieDetail: action.payload
        }))
        .addCase(getListGenres.fulfilled, (state, action) => ({
            ...state,
            genres: action.payload.genres
        }))
        .addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state, action) => ({
                ...state,
                fetching: true
            })
        )
        .addMatcher(
            (action) => !action.type.endsWith('/pending'),
            (state, action) => ({
                ...state,
                fetching: false
            })
        )

})