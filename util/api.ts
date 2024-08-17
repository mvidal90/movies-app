import axios from "axios";

const vars = {
    REACT_APP_TMDB_BASE_URL_API:"https://api.themoviedb.org/3/",
    TMDB_API_KEY:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTRlZTQzMWM3NTE0M2FjNGIwMzBmMTA1Mzc2NjIzYiIsIm5iZiI6MTcyMzU4MDg0Mi4xODM5NTEsInN1YiI6IjVmMmFkY2I2M2UwOWYzMDAzNjIwZTVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiDhx3l_TlGa-kltGCx2n93KEaIzVscss5jVqe7stwQ"
}

const axiosInstance = axios.create({
    baseURL: vars.REACT_APP_TMDB_BASE_URL_API,
    params: { language: "es_LA" },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${vars.TMDB_API_KEY}`
    }
})

export const getMovies = async (page: number) => {
    const resp = await axiosInstance.get("/discover/movie", {params: {page}})
    return resp.data;
}

export const getMovieById = async (id: string) => {
    const resp = await axiosInstance.get(`/movie/${id}`)
    return resp.data;
}

export const getGenres = async () => {
    const resp = await axiosInstance.get("/genre/movie/list")
    return resp.data;
}