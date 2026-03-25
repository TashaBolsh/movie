import { CategoryType, SortType } from '@/common/types'

export type GetMoviesParams = {
  page?: number;
  category:CategoryType;
}

export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  original_language: string;
  adult: boolean;
  video: boolean;
}

export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type SearchMoviesParams = {
  query: string;
  page?: number;
  language?: string;
}

export type DiscoverMoviesParams = {
  page?: number;
  language?: string;
  // Сортировка
  sort_by?: SortType; // popularity.desc, vote_average.desc, primary_release_date.desc, revenue.desc, vote_count.desc
  // Жанры (через запятую)
  with_genres?: string;
  // Рейтинг
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  // Язык оригинала
  with_original_language?: string;
  // Год выпуска
  primary_release_year?: number;
  year?: number;
  // Диапазон дат выпуска
  'primary_release_date.gte'?: string; // YYYY-MM-DD
  'primary_release_date.lte'?: string; // YYYY-MM-DD
  // Продолжительность (в минутах)
  with_runtime_gte?: number;
  with_runtime_lte?: number;
  // Ключевые слова (через запятую)
  with_keywords?: string;
  // Провайдеры для просмотра
  with_watch_providers?: string;
  watch_region?: string;
  with_watch_monetization_types?: string; // flatrate, free, ads, rent, buy
  // Дополнительные параметры
  with_companies?: string;
  with_people?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  with_cast?: string;
  with_crew?: string;
}

// Тип для жанра
export type Genre = {
  id: number;
  name: string;
}

// Тип для детальной информации о фильме
export interface MovieDetails extends Movie {
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
}

// Тип для видео
export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
}

// Тип для изображений
export interface Images {
  backdrops: Array<{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }>;
  logos: Array<{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }>;
  posters: Array<{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }>;
}