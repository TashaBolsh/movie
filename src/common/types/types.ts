import { Category } from '@/common/constants'

const {Popular,TopRated,Upcoming,NowPlaying} = Category

export type CategoryType = ReturnType<typeof Popular | typeof TopRated | typeof Upcoming | typeof NowPlaying | null>
export type SortType = 'popularity.desc' | 'popularity.asc' | 'vote_average.desc' | 'vote_average.asc' | 'primary_release_date.desc' |
  'primary_release_date.asc'| 'title.asc' | 'title.desc'