import globalStyle from '@/common/styles/common.module.css'
import { useAppSelector } from '@/common/hooks'
import { selectFavorites } from '@/features/Favorites/model/FavoritesSlice'
import { MoviesList } from '@/common/components/MoviesList/MoviesList'
import { transformFavoritesToMovies } from '@/features/Favorites/utils'
import { FavoriteMovie } from '@/app/lib/types'

export const Favorites = () => {
  const favorites:FavoriteMovie[] = useAppSelector( selectFavorites )
  const movies = transformFavoritesToMovies(favorites)

  return(
    <div className={globalStyle.container}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h1 style={{ marginTop: '32px'}}>Favorites</h1>
        <section>
          {favorites.length === 0 && <span>Add movies to favorites to see them on this page.</span>}
          <MoviesList movies={movies} isFiveEl={false}/>
        </section>
      </section>
    </div>
  )
}