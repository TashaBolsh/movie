import { FavoriteMovie } from '@/app/lib/types'
import { STORAGE_KEYS } from '@/common/constants'
import { ThemeMode } from '@/app/appSlice'

const getFavoritesFromStorage = (): FavoriteMovie[] => {
  try {
    const favorites = JSON.parse( localStorage.getItem(STORAGE_KEYS.Favorites) );
    return favorites ? favorites : [];
  } catch (error) {
    console.error('Error getting favorites from localStorage:', error);
    return [];
  }
};

const setFavoritesToStorage = (favorites: FavoriteMovie[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.Favorites, JSON.stringify(favorites));
  } catch (error) {
    console.log(error)
  }
}

const getThemeFromStorage = ():ThemeMode => {
  try {
    const themeMode = JSON.parse( localStorage.getItem(STORAGE_KEYS.THEME) );
    return themeMode ? themeMode : 'light';
  } catch (error) {
    console.error('Error getting theme from localStorage:', error);
    return 'light';
  }
};
const setThemeToStorage = (ThemeMode: ThemeMode) => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(ThemeMode));
  } catch {
  }
}

export const StorageData = {
  getFavorites:getFavoritesFromStorage,
  getTheme:getThemeFromStorage,
  setFavorites:setFavoritesToStorage,
  setTheme:setThemeToStorage,
}
