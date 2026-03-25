import { configureStore } from '@reduxjs/toolkit'
import { movieListsApi } from '@/app/movieApi.ts'
import { setupListeners } from '@reduxjs/toolkit/query'
import {appReducer, appSlice} from "@/app/appSlice";
import { StorageData } from '@/app/lib/utils'
import { favoritesReducer, favoritesSlice } from '@/features/Favorites/model/FavoritesSlice'

export const store = configureStore({
  reducer:{
    [appSlice.name]:appReducer,
    [favoritesSlice.name]: favoritesReducer,
    [movieListsApi.reducerPath]: movieListsApi.reducer,
  },
  preloadedState: {
    favorites: StorageData.getFavorites(),
    app:{
      themeMode: StorageData.getTheme()
    },
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieListsApi.middleware),
})

setupListeners(store.dispatch)

store.subscribe(() => {
  StorageData.setTheme( store.getState().app.themeMode )
  StorageData.setFavorites( store.getState().favorites )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store