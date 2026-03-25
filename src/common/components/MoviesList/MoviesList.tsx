import { MovieCard } from '@/common/components/MovieCard/MovieCard'
import { Box } from '@mui/material'
import { Movie } from '@/app/movieApi.types'
import { useAppSelector } from '@/common/hooks'
import { selectFavorites } from '@/features/Favorites/model/FavoritesSlice'
import { useMemo } from 'react'

type MoviesListPropsType = {
  movies:Movie[],
  isFiveEl?:boolean | undefined,
}

export const MoviesList = ( {movies,isFiveEl = true}:MoviesListPropsType ) => {
  const favorites = useAppSelector( selectFavorites )

  const rowElements = useMemo(() => isFiveEl ? 5 : 6, [isFiveEl]);

  return(
    <Box sx={{display:'grid',gridTemplateColumns:`repeat(${rowElements}, minmax(0, 1fr))`,gap:'24px'}} >
      {movies.map((movie,index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} isRating={ favorites.some(fav => fav.id === movie.id) }/>
      ))}
    </Box>
  )
}











