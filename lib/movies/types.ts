

export interface MoviesState {
    fetching: Boolean,
    genres: Array<{id: number, name: string}>,
    movieDetail: Movie
    moviesList: {
        list: Array<Pick<
            Movie,
            'adult' |
            'backdrop_path' |
            'id' |
            'original_language' |
            'original_title' |
            'overview' |
            'popularity' |
            'poster_path' |
            'release_date' |
            'title' |
            'video' |
            'vote_average' |
            'vote_count'
        > & {
            'genres_id': Array<number>
        }>,
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

export interface Movie {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
        id: number
        name: string
        poster_path: string
    }
    budget: number
    genres: Array<{id: number, name: string}>   
    homepage: string
    id: number
    imdb_id: string
    origin_country: Array<string>
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<{id: number, logo_path: string, name: string, origin_country: string}>
    production_countries: Array<{ iso_3166_1: string, name: string }> 
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Array<{english_name: string, iso_639_1: string, name: string}>
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}