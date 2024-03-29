import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
    remove: (state,action) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove} = wishlistSlice.actions

export default wishlistSlice.reducer