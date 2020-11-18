import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks, bookAddedToCart, setPage } from '../../store/actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './book-list-hooks.css';
import Paginator from '../Paginator';

const BookList = ({ books, onAddedToCart }) => {

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};


const BookListHooksContainer = ()=>{
  const dispatch = useDispatch();

  const {books, loading, error, isInit} = useSelector(state=>state.bookList);

  const {page, numPages, nextPage, prevPage} = useSelector(state=>state.bookList);

  const pageInfo = {
    page,
    numPages,
    nextPage,
    prevPage,
    setPage:(page)=>dispatch(setPage(page))
  };

  useEffect(()=>{
    dispatch(fetchBooks(page));
  },[page, dispatch]);

  if (loading && isInit) {
    return (
      <React.Fragment>
        <Paginator
          {...pageInfo}
        />
        <Spinner />
        <Paginator
          {...pageInfo}
        />
      </React.Fragment>
    );
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <React.Fragment>
      <Paginator
        {...pageInfo}
      />
      <BookList
        books={books}
        onAddedToCart={(id)=>dispatch(bookAddedToCart(id))}
      />
      <Paginator
        {...pageInfo}
      />
    </React.Fragment>
  );
}

export default BookListHooksContainer;