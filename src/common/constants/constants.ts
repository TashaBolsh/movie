import { SortType } from '@/common/types'

export const PATH = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
} as const

export const Category = {
  Popular:'popular',
  TopRated:'top-rated',
  Upcoming:'upcoming',
  NowPlaying:'now-playing',
}as const

export const STORAGE_KEYS = {
  Favorites: 'favorites',
  THEME: 'theme',
}

type sortOptionType = {value: SortType, label:string}
export const SORT_OPTIONS:sortOptionType[] = [
  { value: 'popularity.desc', label: 'Popularity ↓' },
  { value: 'popularity.asc', label: 'Popularity ↑' },
  { value: 'vote_average.desc', label: 'Rating ↓' },
  { value: 'vote_average.asc', label: 'Rating ↑' },
  { value: 'primary_release_date.desc', label: 'Release Date ↓' },
  { value: 'primary_release_date.asc', label: 'Release Date ↑' },
  { value: 'title.asc', label: 'Title A-Z' },
  { value: 'title.desc', label: 'Title Z-A' },
] as const