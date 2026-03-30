import { FavoriteMovie } from '@/app/lib/types'
import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as FavoriteMovie[],
  reducers:
    create => ({
      changeFavoriteAC: create.reducer<FavoriteMovie>((state, action) => {
        const index = state.findIndex(item => item.id === action.payload.id)
        if (index === -1) {
          state.push(action.payload)
        } else {
          state.splice(index, 1)
        }
      })
    }),
  selectors: {
    selectFavorites: (state) => state
  }
})

export const favoritesReducer = favoritesSlice.reducer
export const { changeFavoriteAC } = favoritesSlice.actions
export const { selectFavorites } = favoritesSlice.selectors