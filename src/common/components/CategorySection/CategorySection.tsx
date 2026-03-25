import s from './moviesSectionList.module.css'
import { OvalButton } from '@/common/components/OvalButton/OvalButton'
import { CategoryType } from '@/common/types'
import { useFetchMoviesInfiniteQuery } from '@/app/movieApi'
import { useInfiniteScroll, useTitle } from '@/common/hooks'
import { NavLink } from 'react-router-dom'
import { PATH } from '@/common/constants'
import { MoviesList } from '@/common/components/MoviesList/MoviesList'
import { LoadingTrigger } from '@/common/components/LoadingTrigger/LoadingTrigger'

type MovieSectionProps = {
  category: CategoryType,
  isAll?: boolean,
  isFiveEl?:boolean
}

export const CategorySection = ( {category, isAll = false, isFiveEl = false} : MovieSectionProps ) => {
  const {data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage} = useFetchMoviesInfiniteQuery( {category} )
  const { observerRef } = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetching })
  if (data === undefined) return null
  let allMovies = data?.pages.flatMap((page) => page.results)
  let movies = []
  isAll ? movies = allMovies : movies = allMovies.slice(0,6)

  return (
    <section className={s.movie_section}>
      <div className={s.flex_box}>
        <h2 className={s.title}>{useTitle(category)}</h2>
        {!isAll && ( <OvalButton component={NavLink} to={`${PATH.CategoryMovies}/${category}`} variant="outlined"
                                 color="inherit" sx={{ borderColor: 'grey.500' }}>View more</OvalButton> )}
      </div>
      <MoviesList movies={movies} isFiveEl={isFiveEl}/>
      {isAll && hasNextPage && <LoadingTrigger isFetchingNextPage={isFetchingNextPage} observerRef={observerRef} />}
    </section>
  )
}