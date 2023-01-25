// Types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

// Action Creators
export const addBook = (addedBook) => ({ type: ADD_BOOK, payload: addedBook });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
