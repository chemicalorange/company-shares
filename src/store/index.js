import { configureStore } from '@reduxjs/toolkit'
import companySharesReducer from './slices/companySharesSlice'
export const store = configureStore({
  reducer: {
    companyShares: companySharesReducer,
  },
})
