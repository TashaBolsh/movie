import type {
  GetMoviesParams,
  MoviesResponse, SearchMoviesParams
} from '@/app/movieApi.types.ts'
import { transformMovie } from '@/app/lib/utils/transformMovie'
import { DomainMovies } from '@/app/lib/types'
import { DiscoverMoviesParams, Genre } from '@/app/movieApi.types.ts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieListsApi = createApi({
  reducerPath: 'movieListsApi',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_TOKEN}`)
      headers.set('accept', 'application/json')
    }
  }),
  endpoints: build => ({
    // fetchMovies: build.query<DomainMovies, GetMoviesParams>({
    //   query: ({ page = 1, category }) => ({
    //     url: `movie/${category.replace('-', '_')}`,
    //     params: { page }
    //   }),
    //   transformResponse: (responce: MoviesResponse, meta, { category }) => {
    //     return transformMovie(category)(responce)
    //   },
    //   providesTags: (res, err, { category }) => [{ type: 'Movies', id: category }]
    // }),

    fetchMovies: build.infiniteQuery<DomainMovies, GetMoviesParams, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: lastPage => {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1
          }
          return undefined
        }
      },
      query: ({ pageParam, queryArg: { category } }) => ({
        url: `movie/${category.replace('-', '_')}`,
        params: {
          page: pageParam
        }
      }),
      transformResponse: (responce: MoviesResponse, meta, { category }) => {
        return transformMovie(category)(responce)
      },
      providesTags: (res, err, { category }) => [{ type: 'Movies', id: category }]
    }),

    searchMovies: build.infiniteQuery<MoviesResponse, SearchMoviesParams, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: lastPage => {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1
          }
          return undefined
        }
      },
      // Функция для построения запроса
      query: ({ queryArg, pageParam }) => ({
        url: 'search/movie',
        params: {
          query: queryArg.query,
          page: pageParam
        }
      }),
      transformResponse: (response: MoviesResponse) => {
        return transformMovie(null)(response)
      },
      providesTags: (result, error, arg) =>
        result ? [{ type: 'search', id: arg.query }] : ['search']
    }),

    discoverMovies: build.infiniteQuery<MoviesResponse, DiscoverMoviesParams, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: lastPage => {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1
          }
          return undefined
        }
      },
      query: ({ pageParam, queryArg: { sort_by, voteAverageGte, voteAverageLte, with_genres, } }) => ({
        url: 'discover/movie',
        params: {
          page: pageParam,
          sort_by: sort_by,
          'vote_average.gte': voteAverageGte,
          'vote_average.lte': voteAverageLte,
          with_genres: with_genres,
        }
      }),
      transformResponse: (response: MoviesResponse) => {
        return transformMovie(null)(response)
      },
      providesTags: ['discover']
    }),

    // Фильтрация и поиск с множественными параметрами (Discover)
    // discoverMovies: build.query<MoviesResponse, DiscoverMoviesParams>({
    //   query: ({
    //             page = 1,
    //             sort_by = 'popularity.desc',
    //             with_genres,
    //             'vote_average.gte': voteAverageGte,
    //             'vote_average.lte': voteAverageLte,
    //             with_original_language,
    //             primary_release_year,
    //             year,
    //             'primary_release_date.gte': primaryReleaseDateGte,
    //             'primary_release_date.lte': primaryReleaseDateLte,
    //             with_runtime_gte,
    //             with_runtime_lte,
    //             with_keywords,
    //             with_watch_providers,
    //             watch_region,
    //             with_watch_monetization_types
    //           }: DiscoverMoviesParams) => {
    //     const params = {
    //       page,
    //       sort_by,
    //       with_genres,
    //     }
    //
    //     // if (with_genres) params.with_genres = with_genres
    //     // if (voteAverageGte !== undefined) params['vote_average.gte'] = voteAverageGte
    //     // if (voteAverageLte !== undefined) params['vote_average.lte'] = voteAverageLte
    //     // if (with_original_language) params.with_original_language = with_original_language
    //     // if (primary_release_year) params.primary_release_year = primary_release_year
    //     // if (year) params.year = year
    //     // if (primaryReleaseDateGte) params['primary_release_date.gte'] = primaryReleaseDateGte
    //     // if (primaryReleaseDateLte) params['primary_release_date.lte'] = primaryReleaseDateLte
    //     // if (with_runtime_gte) params.with_runtime_gte = with_runtime_gte
    //     // if (with_runtime_lte) params.with_runtime_lte = with_runtime_lte
    //     // if (with_keywords) params.with_keywords = with_keywords
    //     // if (with_watch_providers) params.with_watch_providers = with_watch_providers
    //     // if (watch_region) params.watch_region = watch_region
    //     // if (with_watch_monetization_types) params.with_watch_monetization_types = with_watch_monetization_types
    //
    //     return {
    //       url: 'discover/movie',
    //       params
    //     }
    //   },
    //   transformResponse: (responce: MoviesResponse, meta) => {
    //     return transformMovie(null)(responce)
    //   },
    //   providesTags: ['discover']
    // }),

    fetchGenres: build.query<{ genres: Genre[] }>({
      query: () => ({
        url: 'genre/movie/list'
      })
    })

  })
})

export const {
  useFetchMoviesInfiniteQuery,
  useSearchMoviesInfiniteQuery,
  useDiscoverMoviesInfiniteQuery,
  useFetchGenresQuery
} = movieListsApi