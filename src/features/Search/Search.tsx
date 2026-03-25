import globalStyle from '@/common/styles/common.module.css'
import { SearchForm } from '@/common/components/SearchForm/SearchForm'
import { useSearchParams } from 'react-router-dom'
import { MoviesList } from '@/common/components/MoviesList/MoviesList'
import { useInfiniteScroll } from '@/common/hooks'
import { LoadingTrigger } from '@/common/components/LoadingTrigger/LoadingTrigger'
import { useSearchMoviesInfiniteQuery } from '@/app/movieApi'

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { currentData, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } = useSearchMoviesInfiniteQuery(
    { query },
    { skip: !query, }
  );
  const { observerRef } = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetching })
  let pages = currentData?.pages.flatMap((page) => page.results)
  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop:'44px' }}
         className={globalStyle.container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '45%' }}>
        <h1 style={{ margin: 0 }}>Search Results</h1>
        <SearchForm/>
      </div>
      <div>
        {!query && <span style={{ margin: 0 }}>Enter a movie title to start searching.</span>}
        {pages && pages.length === 0 && <span style={{ margin: 0 }}>No matches found for "{query}"</span>}
        {query && pages && <MoviesList movies={pages || []}></MoviesList>}
      </div>
      {hasNextPage && <LoadingTrigger isFetchingNextPage={isFetchingNextPage} observerRef={observerRef} />}
    </div>
  )
}