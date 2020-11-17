import { fetchBooksReq } from "../../services/fetch-books";

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const setPage = (page)=>{
  return {
    type: 'SET_PAGE',
    payload: page
  }
}

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

const fetchBooks = (page) => (dispatch, getState) => {
  dispatch(booksRequested());
  dispatch(setPage(page));
  fetchBooksReq(page)
    .then((data) => {
      //console.log('state = ', getState().bookList);
      if(getState().bookList.page===data.page){
        dispatch(booksLoaded(data));
      }
    })
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks
};