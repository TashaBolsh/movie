import {Movie} from "@/app/movieApi.types";
import s from "./welcome.module.css"
import globalStyle from '@/common/styles/common.module.css'
import {useMemo} from "react";
import {SearchForm} from "@/common/components/SearchForm/SearchForm";

type props = {
    movies: Movie[];
}
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const WelcomeSection = ({movies}: props) => {

    let poster = {backgroundImage: 'linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%)'}
    const posterMovie = useMemo(() => getRandomElement(movies),[movies.length])
    posterMovie ? poster = {backgroundImage: `${poster.backgroundImage},url(${posterMovie.backdrop_path})`} : poster

    return (
        <section style={poster} className={s.welcome_section}>
            <div style={{display:'flex',alignItems:'center'}} className={globalStyle.container}>
                <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'45%'}}>
                    <h1 style={{margin:0}}>Welcome</h1>
                    <h2 style={{margin:0}}>Browse highlighted titles from TMDB</h2>
                    <SearchForm/>
                </div>
            </div>
        </section>
    )
}