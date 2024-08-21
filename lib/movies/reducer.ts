import {
    createReducer,
} from '@reduxjs/toolkit'

import { 
    getFoundMovies, 
    getListGenres, 
    getListMovies, 
    getMovieDetail, 
    resetAction, 
    resetParams, 
    setParams, 
    setSearchBy 
} from './actions'
import { MoviesState } from './types'

export const INITIAL_STATE: MoviesState = {
    fetching: true,
    genres: [],
    movieDetail: null,
    moviesList: {
        list: [],
        page: 0,
        totalPages: 0
    },
    searchBy: {
        query: "",
        enabled: false
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
        .addCase(resetParams, (state) => ({
            ...state,
            params: INITIAL_STATE.params
        }))
        .addCase(setSearchBy, (state, action) => ({
            ...state,
            searchBy: {
                ...state.searchBy,
                query: action.payload
            }
        }))
        .addCase(getListMovies.fulfilled, (state, action) => ({
            ...state,
            moviesList: {
                list: action.payload.results,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
            },
            searchBy: {
                query: "",
                enabled: false
            }
        }))
        .addCase(getFoundMovies.fulfilled, (state, action) => ({
            ...state,
            moviesList: {
                list: action.payload.results,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
            },
            searchBy: {
                ...state.searchBy,
                enabled: true
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
            (state) => ({
                ...state,
                fetching: true
            })
        )
        .addMatcher(
            (action) => !action.type.endsWith('/pending'),
            (state) => ({
                ...state,
                fetching: false
            })
        )

})