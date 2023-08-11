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
    updateOrder: (state, action) => {
      const { srcIndex, destIndex } = action.payload
      const items = Array.from(state.data)
      const [reorderedItem] = items.splice(srcIndex, 1)

      items.splice(destIndex, 0, reorderedItem)
      console.log(items)
      state.data = items
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyShares.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})
export const { updateOrder } = companySharesSlice.actions

export default companySharesSlice.reducer
