

export interface MoviesState {
    fetching: Boolean,
    genres: Array<{id: number, name: string}>,
    movieDetail: any
    moviesList: {
        list: Array<any>,
        page: number,
        totalPages: number
    },
}
