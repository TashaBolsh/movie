import s from '@/common/components/Header/style.module.css'
import { NavLink } from 'react-router-dom'
import { PATH } from '@/common/constants'

const activeStylesHandler = ({isActive}:{isActive:boolean}) => isActive ? `${s.navLink} ${s.active}` : s.navLink

export const Navigation = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink className={activeStylesHandler} to={PATH.Main}>Main</NavLink>
        <span>|</span>
        <NavLink className={activeStylesHandler} to={PATH.CategoryMovies}>Category Movies</NavLink>
        <span>|</span>
        <NavLink className={activeStylesHandler} to={PATH.FilteredMovies}>Filtered Movies</NavLink>
        <span>|</span>
        <NavLink className={activeStylesHandler} to={PATH.Search}>Search</NavLink>
        <span>|</span>
        <NavLink className={activeStylesHandler} to={PATH.Favorites}>Favorites</NavLink>
      </nav>
    </div>
  )
}