import {MoviesResponse} from "@/app/movieApi.types";
import { DomainMovies } from '@/app/lib/types'
import { CategoryType } from '@/common/types'

type optionsType = {
    posterSize?: string;
    backdropSize?: string;
    fallbackPoster?: string;
    fallbackBackdrop?: string;
    category:CategoryType;
}

const transformMovieImage = (response: MoviesResponse, options?:optionsType):DomainMovies => {
    const {
        posterSize = 'w185',
        backdropSize = 'original',
        fallbackPoster = '/fallback-poster.jpg',
        fallbackBackdrop = '/fallback-backdrop.jpg',
        category = null
    } = options;

    return {
        ...response,
        results: response.results.map(movie => ({
            ...movie,
            poster_path: movie.poster_path
              ? `https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`
              : fallbackPoster,
            backdrop_path: movie.backdrop_path
              ? `https://image.tmdb.org/t/p/${backdropSize}${movie.backdrop_path}`
              : fallbackBackdrop
        })),
        category,
        entityStatus:'idle',
    }
}

export const transformMovie = (category:CategoryType) => {
    return (response) => transformMovieImage(response,{category})
}