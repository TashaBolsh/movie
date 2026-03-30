import { Box, Typography } from '@mui/material';
import { useFetchGenresQuery } from '@/app/movieApi'
import { useCallback, memo } from 'react';
import { GenreButton } from '@/features/FilteredMovies/ui/GenreToggleGroup/GenreButton/GenreButton'

type GenreToggleGroupProps = {
  value: number[];
  onChange: ( newGenres: number[] | ((prev: number[]) => number[]) ) => void;
};

export const GenreToggleGroup = memo(({ value, onChange }: GenreToggleGroupProps) => {
  const { data } = useFetchGenresQuery();
  const genres = data?.genres || [];

  const handleGenreToggle = useCallback((genreId: number) => {
    onChange((prev: number[]) => {
      return prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId];
    });
  }, [onChange]);

  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '400px' }}>
      <Typography variant="subtitle1" fontWeight="500" gutterBottom>Genres</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {genres.map(genre => (
          <GenreButton key={genre.id} genre={genre} isSelected={value.includes(genre.id)} onToggle={handleGenreToggle}/>
        ))}
      </Box>
    </Box>
  );
});