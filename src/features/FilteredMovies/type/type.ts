import { SortType } from '@/common/types'
import { SelectChangeEvent } from '@mui/material'

export type FilterStateType<T> = {
  sortBy: SortType;
  rating: [number, number];
  selectedGenres: T;
}

export type HandlersType = {
  handleSortChange: (event: SelectChangeEvent) => void;
  handleRatingChange: (event: Event,newValue: number | number[]) => void;
  handleGenreChange: (newGenres: number[]) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}