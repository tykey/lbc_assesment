import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../slices/tasksSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, tasksReducer)

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type IRootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
export default store
