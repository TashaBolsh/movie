import globalStyle from '@/common/styles/common.module.css'
import s from './CategoryMovies.module.css'
import {OvalButton} from "@/common/components/OvalButton/OvalButton";
import { NavLink, Outlet, } from 'react-router-dom'
import {categoryButtonSX} from "@/features/CategoryMovies/CategoryMovies.styles";
import { Category } from '@/common/constants'

const activeStylesHandler = ( {isActive}:{isActive:boolean} ) => isActive ? 'active' : ''

export const CategoryMovies = () => {
    return (
        <section style={{marginTop:'44px'}} className={globalStyle.container}>
            <div className={s.flex_container}>
                <div className={s.category_switch_container}>
                    <div className={s.category_buttons}>
                        <OvalButton component={NavLink} to={Category.Popular} variant="outlined" color='inherit'
                                    className={activeStylesHandler} sx={categoryButtonSX}>
                            Popular Movies
                        </OvalButton>
                        <OvalButton component={NavLink} to={Category.TopRated} variant="outlined" color='inherit'
                                    className={activeStylesHandler} sx={categoryButtonSX}>
                            Top Rated Movies
                        </OvalButton>
                        <OvalButton component={NavLink} to={Category.Upcoming} variant="outlined" color='inherit'
                                    className={activeStylesHandler} sx={categoryButtonSX}>
                            Upcoming Movies
                        </OvalButton>
                        <OvalButton component={NavLink} to={Category.NowPlaying} variant="outlined" color='inherit'
                                    className={activeStylesHandler} sx={categoryButtonSX}>
                            Now Playing Movies
                        </OvalButton>
                    </div>
                </div>
                <Outlet/>
            </div>
        </section>
    )
}