const ADD_BOOK = 'redux-app/books/ADD_BOOK';
const REMOVE_BOOK = 'redux-app/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (bookID) => ({
  type: REMOVE_BOOK,
  id: bookID,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
