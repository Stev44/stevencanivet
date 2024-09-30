import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { switchSlice } from './slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  switchLang: switchSlice.reducer,
})

const configPersist = {
  key: 'config',
  storage,
}

const persistedReducer = persistReducer(configPersist, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
