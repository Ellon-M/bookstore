// Types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// Action Creators
export const addBook = (addedBook) => ({ type: ADD_BOOK, payload: addedBook });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter(({ id }) => id !== action.id)];
    default:
      return state;
  }
};

export default bookReducer;
