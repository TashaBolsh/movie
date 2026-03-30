import globalStyle from '@/common/styles/common.module.css'
import { useFetchMoviesInfiniteQuery, } from '@/app/movieApi.ts'
import { CategorySection } from '@/common/components/CategorySection/CategorySection'
import { WelcomeSection } from '@/features/MainPage/WelcomeSection/WelcomeSection'
import { Category } from '@/common/constants'

export const Main = () => {
  const { data } = useFetchMoviesInfiniteQuery({ category: Category.Popular })
  let popularMovies = data?.pages[0].results

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <WelcomeSection movies={popularMovies || []} />
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }} className={globalStyle.container}>
          <CategorySection
            category={Category.Popular}
          />
          <CategorySection
            category={Category.TopRated}
          />
          <CategorySection
            category={Category.Upcoming}
          />
          <CategorySection
            category={Category.NowPlaying}
          />
        </div>
      </div>
    </div>)
}