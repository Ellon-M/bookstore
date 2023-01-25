import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook: (state, { payload }) => {
      state.push(payload);
    },
    removeBook: (state, { payload }) => state.filter(({ id }) => id !== payload),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
