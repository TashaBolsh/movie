import { Category, PATH } from '@/common/constants'

type props = ReturnType<typeof Category | typeof PATH>

export const useTitle = (arg:props) => {
  switch (arg) {
    case Category.NowPlaying: return 'Now Playing Movies'
    case Category.Popular: return 'Popular Movies'
    case Category.TopRated: return 'Top Rated Movies'
    case Category.Upcoming: return 'Upcoming Movies'

    case PATH.Main: return 'Main'
    case PATH.CategoryMovies: return  'Category Movies'
    case PATH.FilteredMovies: return 'Filtered Movies'
    case PATH.Search: return 'Search'
    case PATH.Favorites: return 'Favorites'
  }
}