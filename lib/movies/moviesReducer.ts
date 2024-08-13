import {
    createAction,
    createReducer,
} from '@reduxjs/toolkit'

export const INITIAL_STATE: {
    moviesList: {
        list: Array<any>,
        page: number,
        totalPages: number
    },
    fetching: Boolean,
    movieDetail: any
} = {
    moviesList: {
        list: [],
        page: 0,
        totalPages: 0
    },
    fetching: false,
    movieDetail: {}
}

const resetAction = createAction('movies/RESET_STATE')

export const reducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(resetAction, () => INITIAL_STATE)
        
})