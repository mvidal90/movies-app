import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import { getMovies } from "@/util/api"

export const resetAction = createAction('movies/RESET_STATE')

export const getListMovies = createAsyncThunk(
    'movies/GET_MOVIES_LIST',
    async () => {
        const data = await getMovies()
        return data
    },
)