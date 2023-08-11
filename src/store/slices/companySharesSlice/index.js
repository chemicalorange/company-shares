import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { companySharesAPI } from '../../api'

const initialState = {
  data: null,
}

export const fetchCompanyShares = createAsyncThunk('users/fetchByIdStatus', async () => {
  return await companySharesAPI.fetchCompanyShares()
})
export const companySharesSlice = createSlice({
  name: 'company-shares',
  initialState,
  reducers: {
    updateCompanyShares: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyShares.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})
export const { updateCompanyShares } = companySharesSlice.actions

export default companySharesSlice.reducer
