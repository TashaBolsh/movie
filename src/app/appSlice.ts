import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
export type ThemeMode = "dark" | "light"
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    themeMode: "light" as ThemeMode,
    status: "idle" as RequestStatus,
    error: null as string | null,
  },
  reducers: create => ({
    changeThemeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
    }),
    setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status
    }),
    setAppErrorAC: create.reducer<{ error: null | string }>((state, action) => {
      state.error = action.payload.error
    }),
  }),
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectAppStatus: (state) => state.status,
    selectAppError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, state => {state.status = "loading"} )
      .addMatcher( isFulfilled, state => { state.status = 'succeeded' } )
      .addMatcher( isRejected, state => { state.status = 'failed' } )
  }
})

export const appReducer = appSlice.reducer
export const { changeThemeAC, setAppStatusAC, setAppErrorAC } = appSlice.actions
export const { selectThemeMode, selectAppStatus, selectAppError } = appSlice.selectors