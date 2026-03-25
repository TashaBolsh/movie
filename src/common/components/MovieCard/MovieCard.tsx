import React, { memo } from 'react'
import type { Movie } from '@/app/movieApi.types.ts'
import s from './movieCard.module.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButtonFavoriteSx } from '@/common/components/MovieCard/MovieCard.styles'
import { useFavorites } from '@/common/components/MovieCard/hooks'

type MovieCardProps = {
  movie: Movie
  isRating:boolean
}

export const MovieCard = React.memo(({ movie,isRating }: MovieCardProps) => {
  const { changeFavoriteStatus } = useFavorites(movie)

  const changeFavorite = () => {
    changeFavoriteStatus()
  }

  console.log(movie)
  const rating = Math.round(Number(movie.vote_average) * 10 ) / 10
  let ratingStile = {backgroundColor: '#16a34a',color: '#ffffff'}
  if(rating < 5) {
    ratingStile = { backgroundColor: '#dc2626', color: '#ffffff' }
  } else if(rating < 7){
    ratingStile = { backgroundColor: '#facc15', color: '#111827' }
  }

  return (
    <article className={s.card}>
      <div className={s.poster_frame}>
        <Link className={s.poster_link} to="/">
          <img className={s.img} src={movie.poster_path} alt={movie.title} />
          <span style={ratingStile} className={s.rating}>{rating}</span>
        </Link>
        <IconButton onClick={changeFavorite} type={'button'} aria-label="Add to favorites"
                    sx={IconButtonFavoriteSx( isRating )}>
          <FavoriteIcon />
        </IconButton>
      </div>
      <Link className={s.card_title_link} to="/">
        <h3 className={s.card_title}>{movie.title}</h3>
      </Link>
    </article>
  )
})