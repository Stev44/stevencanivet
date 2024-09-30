import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
  name: 'switchLang',
  initialState: {
    lang: false,
  },
  reducers: {
    setLang(state, action) {
      if (action.payload.lang !== undefined) {
        state.lang = action.payload.lang
      }
    },
  },
})

export const { setLang } = switchSlice.actions
