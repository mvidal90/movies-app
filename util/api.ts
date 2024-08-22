import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.TMDB_BASE_URL_API,
    params: { language: "es" },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
})

export const getMovies = async (params: {
    "vote_average.gte": number
    "vote_average.lte": number
    with_genres: string
    primary_release_year: number | null
}, page: number) => {
    const resp = await axiosInstance.get("/discover/movie", {params: {...params, page}})
    return resp.data;
}

export const getSearchMovies = async (params: {query: string}, page: number) => {
    const resp = await axiosInstance.get("/search/movie", {params: {...params, page}})
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