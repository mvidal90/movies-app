import { configureStore } from '@reduxjs/toolkit'

import {reducer as moviesReducer, INITIAL_STATE as initialStateMovies} from './movies/moviesReducer'

const reducer = {
    movies: moviesReducer,
}

const preloadedState = {
    movies: initialStateMovies
}

export const makeStore = () => {
    return configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']