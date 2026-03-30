import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeFavoriteAC, selectFavorites } from '@/features/Favorites/model/FavoritesSlice'
import { Movie } from '@/app/movieApi.types'
import { useCallback } from 'react'

export const useFavorites = (movie: Movie) => {
  const dispatch = useAppDispatch()

  const changeFavoriteStatus = useCallback(() => {
    dispatch(changeFavoriteAC({
      id: movie.id,
      title: movie.title,
      posterUrl: movie.poster_path,
      voteAverage: movie.vote_average,
    }));
  }, [dispatch]);

  return { changeFavoriteStatus };
};