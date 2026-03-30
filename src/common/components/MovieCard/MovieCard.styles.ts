import { SxProps } from '@mui/material'
import s from './movieCard.module.css'


export const IconButtonFavoriteSx = (isFaforite:boolean): SxProps => ({
  backgroundColor: '#0f172a99',
  color: !isFaforite ? '#ffffffd9' : '#facc15',
  opacity: !isFaforite && '0',
  position: 'absolute',
  top: '12px',
  right: '12px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'primary.main', // синий MUI primary
    color: !isFaforite && 'white'
  },
  [`.${s.poster_frame}:hover &`]: {
    opacity: 1
  },
})