import { FavoriteMovie } from '@/app/lib/types'
import { Movie } from '@/app/movieApi.types'

export const transformFavoritesToMovies = (favorites: FavoriteMovie[]): Movie[] => {
  if(favorites.length === 0 || !favorites) return []

  const movies = favorites.map(favorite => ({
    id: favorite.id,
    title: favorite.title,
    original_title: favorite.title,
    overview: '',
    poster_path: favorite.posterUrl || null,
    backdrop_path: null,
    release_date: '',
    vote_average: favorite.voteAverage,
    vote_count: 0,
    popularity: 0,
    genre_ids: [],
    original_language: '',
    adult: false,
    video: false
  }))

  return movies
}