import { MoviesResponse } from '@/app/movieApi.types'
import { RequestStatus } from '@/app/appSlice'
import { CategoryType } from '@/common/types'

export type DomainMovies = MoviesResponse & {
  category: CategoryType,
  entityStatus: RequestStatus,
}

export type FavoriteMovie = {
  id: number;
  title: string;
  posterUrl: string | null;
  voteAverage: number;
};