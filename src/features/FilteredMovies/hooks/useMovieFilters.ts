import { useCallback, useState, useMemo, useRef } from 'react'
import { FilterStateType } from '@/features/FilteredMovies/type'
import { SORT_OPTIONS } from '@/common/constants'
import { SelectChangeEvent } from '@mui/material'
import { SortType } from '@/common/types'

const INITIAL_FILTERS: FilterStateType<number[]> = {
  sortBy: SORT_OPTIONS[0].value,
  rating: [0, 10],
  selectedGenres: []
}

const formatGenresForApi = (genres: number[]): string | undefined =>
  genres.length ? genres.join(',') : undefined

const isTempEqual = (a: FilterStateType<number[]>, b: FilterStateType<number[]>) =>
  a.sortBy === b.sortBy &&
  a.rating[0] === b.rating[0] &&
  a.rating[1] === b.rating[1] &&
  a.selectedGenres.length === b.selectedGenres.length &&
  a.selectedGenres.every((val, idx) => val === b.selectedGenres[idx])

const isAppliedEqual = (a: FilterStateType<string | undefined>, b: FilterStateType<string | undefined>) =>
  a.sortBy === b.sortBy &&
  a.rating[0] === b.rating[0] &&
  a.rating[1] === b.rating[1] &&
  a.selectedGenres === b.selectedGenres

export const useMovieFilters = (initial = INITIAL_FILTERS) => {
  const initialRef = useRef(initial)

  const [tempFilters, setTempFilters] = useState(initialRef.current)
  const [appliedFilters, setAppliedFilters] = useState<FilterStateType<string | undefined>>({
    ...initialRef.current,
    selectedGenres: undefined
  })

  const updateTemp = useCallback((updater: (prev: FilterStateType<number[]>) => FilterStateType<number[]>) => {
    setTempFilters(prev => {
      const next = updater(prev)
      return isTempEqual(prev, next) ? prev : next
    })
  }, [])

  const handleSortChange = useCallback((event: SelectChangeEvent<SortType>) => {
    updateTemp(prev => ({ ...prev, sortBy: event.target.value }))
  }, [updateTemp])

  const handleRatingChange = useCallback((_event: Event, newValue: number[]) => {
    updateTemp(prev => ({ ...prev, rating: newValue as [number, number] }))
  }, [updateTemp])

  const handleGenreChange = useCallback((updater: (prev: number[]) => number[]) => {
    updateTemp(prev => ({ ...prev, selectedGenres: updater(prev.selectedGenres) }))
  }, [updateTemp])

  const applyFilters = useCallback(() => {
    setAppliedFilters(prev => {
      const next = {
        sortBy: tempFilters.sortBy,
        rating: tempFilters.rating,
        selectedGenres: formatGenresForApi(tempFilters.selectedGenres)
      }
      return isAppliedEqual(prev, next) ? prev : next
    })
  }, [tempFilters])

  const resetFilters = useCallback(() => {
    const defaultTemp = initialRef.current
    const defaultApplied = { ...defaultTemp, selectedGenres: undefined }

    setTempFilters(prev => isTempEqual(prev, defaultTemp) ? prev : defaultTemp)
    setAppliedFilters(prev => isAppliedEqual(prev, defaultApplied) ? prev : defaultApplied)
  }, [])

  const filters = useMemo(() => ({
    temp: tempFilters,
    applied: appliedFilters
  }), [tempFilters, appliedFilters])

  const handlers = useMemo(() => ({
    handleSortChange,
    handleRatingChange,
    handleGenreChange,
    resetFilters,
    applyFilters
  }), [handleSortChange, handleRatingChange, handleGenreChange, resetFilters, applyFilters])

  return { filters, handlers }
}