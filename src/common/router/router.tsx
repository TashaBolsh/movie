import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import { App } from '@/app/App.tsx'
import { Error404 } from '@/common/components/Error404/Error404.tsx'
import { CategoryMovies } from '@/features/CategoryMovies/CategoryMovies'
import { Favorites } from '@/features/Favorites/ui/Favorites'
import { FilteredMovies } from '@/features/FilteredMovies/ui/FilteredMovies'
import { Search } from '@/features/Search/Search'
import { Main } from '@/features/MainPage/MainPage'
import { Category, PATH } from '@/common/constants'
import { CategoryList } from '@/features/CategoryMovies/CategoryList/CategoryList'

const categoryRoutes:RouteObject[] = [
  { path: `${PATH.CategoryMovies}/:category`,element:<CategoryList/>, },
  { path: PATH.CategoryMovies, element: <Navigate to={ `${PATH.CategoryMovies}/${Category.Popular}` }/> },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: PATH.Main, element: <Main /> },
      { path: PATH.CategoryMovies,Component:CategoryMovies, children:categoryRoutes},
      { path: PATH.FilteredMovies, element: <FilteredMovies /> },
      { path: PATH.Search, element: <Search /> },
      { path: PATH.Favorites, element: <Favorites /> }
    ]
  }
])