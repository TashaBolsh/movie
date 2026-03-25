import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import { OvalButton } from '@/common/components/OvalButton/OvalButton'
import React, { memo } from 'react'
import { FilterStateType, HandlersType } from '@/features/FilteredMovies/type'
import { SortSelect } from '@/features/FilteredMovies/ui/SortSelect/SortSelect'
import { RatingSlider } from '@/features/FilteredMovies/ui/RatingSlider/RatingSlider'
import { GenreToggleGroup } from '@/features/FilteredMovies/ui/GenreToggleGroup/GenreToggleGroup'

type PropsType = {
  filters: FilterStateType<number[]>,
  handlers: HandlersType,
}

export const FilterArea = memo(({ filters, handlers }: PropsType) => {
  console.log('FilterArea')

  return (
    <Paper component='aside' sx={{ bgcolor: '#f3f4f6', p: 3, borderRadius: 3, display:'flex', flexDirection:'column',
      height: 'fit-content' }}>
      <Typography variant="h5" component="h2" fontWeight="600" fontSize="20px">
        Filters / Sort
      </Typography>
      <Box sx={{ mt: 2 }}>
        <SortSelect
          value={filters.sortBy}
          onChange={handlers.handleSortChange}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <RatingSlider
        value={filters.rating}
        onChange={handlers.handleRatingChange}
      />

      <Divider sx={{ my: 2 }} />

      <GenreToggleGroup
        value={filters.selectedGenres}
        onChange={handlers.handleGenreChange}
      />

      <Stack spacing={1} sx={{ mt: 3 }}>
        <OvalButton variant="contained" onClick={handlers.applyFilters} fullWidth>
          Apply Filters
        </OvalButton>

        <OvalButton variant="contained" onClick={handlers.resetFilters} fullWidth>
          Reset filters
        </OvalButton>
      </Stack>
    </Paper>
  );
});