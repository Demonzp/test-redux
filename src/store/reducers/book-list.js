const updateBookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      isInit:false,
      page:1,
      nextPage:0,
      prevPage:0,
      numPages:0,
      loading: true,
      error: null
    };
  }

  const payload = action.payload;

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state.bookList,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        page: payload.page,
        nextPage: payload.nextPage,
        prevPage: payload.prevPage,
        numPages: payload.numPages,
        books: payload.books,
        loading: false,
        error: null,
        isInit:true
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state.bookList,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'SET_PAGE':
      return {
        ...state.bookList,
        page: payload
      }
      
    default:
      return state.bookList;
  }
};

export default updateBookList;