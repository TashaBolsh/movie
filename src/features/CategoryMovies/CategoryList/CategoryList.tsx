import { useParams } from 'react-router-dom'
import { CategorySection } from '@/common/components/CategorySection/CategorySection'

export const CategoryList = () => {
  const { category } = useParams()

  return(
    <section>
      <CategorySection category={category} isAll={true} isFiveEl={true}/>
    </section>
  )
}