import { configureStore } from '@reduxjs/toolkit'
import { api } from './features/api'
import userReducer from './features/userSlice'
import filterReducer from './features/filter/filterSlice'
import adminFilterReducer from './features/filter/adminFilterSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath] : api.reducer,
    user: userReducer,
    filter: filterReducer,
    adminFilter: adminFilterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

