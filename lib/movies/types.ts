

export interface MoviesState {
    fetching: Boolean,
    genres: Array<{id: number, name: string}>,
    movieDetail: any
    moviesList: {
        list: Array<any>,
        page: number,
        totalPages: number
    },
    searchBy: {
        query: string,
        enabled: boolean
    }
    params: {
        "vote_average.gte": number
        "vote_average.lte": number
        with_genres: string
        primary_release_year: number | null
    }
}
