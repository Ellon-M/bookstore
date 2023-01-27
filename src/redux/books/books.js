import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addSingleBook = createAsyncThunk(
  'books/addSingleBook',
  async (book) => {
    const {
      id, author, title, category,
    } = book;
    await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_ID}/books`, {
      item_id: id,
      title,
      author,
      category,
    });
    return book;
  },
);

export const getAllBooks = createAsyncThunk(
  'books/getAllBooks',
  async () => {
    try {
      const res = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_ID}/books`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const removeSingleBook = createAsyncThunk(
  'books/removeSingleBook',
  async (id) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_ID}/books/${id}`);

    return { id };
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(addSingleBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        const ids = Object.keys(action.payload);
        ids.forEach((id) => {
          const book = {
            id,
            author: action.payload[id][0].author,
            title: action.payload[id][0].title,
            category: action.payload[id][0].category,
          };
          state.push(book);
        });
      })
      .addCase(removeSingleBook.fulfilled, (state, action) => {
        const filtered = state.filter(({ id }) => id !== action.payload.id);
        return filtered;
      });
  },
});

const { reducer } = bookSlice;
export default reducer;
