import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { companySharesAPI } from '../../api'

const initialState = {
  items: null,
  status: null,
}

export const fetchCompanyShares = createAsyncThunk('users/fetchByIdStatus', async () => {
  return await companySharesAPI.fetchCompanyShares()
})
export const companySharesSlice = createSlice({
  name: 'company-shares',
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      const { srcIndex, destIndex } = action.payload
      const items = Array.from(state.items)
      const [reorderedItem] = items.splice(srcIndex, 1)

      items.splice(destIndex, 0, reorderedItem)
      state.items = items
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyShares.pending, (state) => {
      state.status = 'pending'
    })

    builder.addCase(fetchCompanyShares.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'fulfilled'
    })

    builder.addCase(fetchCompanyShares.fulfilled, (state) => {
      state.status = 'rejected'
    })
  },
})
export const { updateOrder } = companySharesSlice.actions

export default companySharesSlice.reducer
