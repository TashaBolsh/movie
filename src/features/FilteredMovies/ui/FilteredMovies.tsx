import globalStyle from '@/common/styles/common.module.css';
import { useMovieFilters } from '@/features/FilteredMovies/hooks/useMovieFilters'
import { FilterArea } from '@/features/FilteredMovies/ui/FilterArea/FilterArea'
import { useDiscoverMoviesInfiniteQuery } from '@/app/movieApi'
import { useMemo } from 'react'
import { MoviesList } from '@/common/components/MoviesList/MoviesList'
import { useInfiniteScroll } from '@/common/hooks'
import { LoadingTrigger } from '@/common/components/LoadingTrigger/LoadingTrigger'

export const FilteredMovies = () => {
  const { filters, handlers } = useMovieFilters();
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } = useDiscoverMoviesInfiniteQuery({
    sort_by: filters.applied.sortBy,
    voteAverageGte: 0,
    voteAverageLte: filters.applied.rating[1],
    with_genres: filters.applied.selectedGenres,
  });
  //const movies = useMemo(() => data?.pages[0].results || [], [data]);
  const { observerRef } = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetching })
  let pages = data?.pages.flatMap((page) => page.results)

  return (
    <section style={{ marginTop: '44px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)', gap:'24px' }} className={globalStyle.container}>
      <FilterArea filters={filters.temp} handlers={handlers}/>
      <div>
        <MoviesList movies={pages || []}></MoviesList>
        {hasNextPage && <LoadingTrigger isFetchingNextPage={isFetchingNextPage} observerRef={observerRef} />}
      </div>
    </section>
  );
};