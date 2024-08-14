import {
    createReducer,
} from '@reduxjs/toolkit'

import { getListMovies, resetAction } from './actions'
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
}

export const reducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(resetAction, () => INITIAL_STATE)
        .addCase(getListMovies.fulfilled, (state, action) => ({
            ...state,
            moviesList: {
                list: action.payload.results,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
            }
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