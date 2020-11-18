import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchBooks, bookAddedToCart, setPage } from '../../store/actions';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './book-list.css';
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

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks(this.props.page);
  }

  componentDidUpdate(prevProps){
    if(this.props.page===prevProps.page){
      return;
    }
    this.props.fetchBooks(this.props.page);
  }

  render() {
    const { books, loading, error, isInit, onAddedToCart } = this.props;
    const {page, numPages, nextPage, prevPage, setPage} = this.props;
    const pageInfo = {
      page,
      numPages,
      nextPage,
      prevPage,
      setPage
    };

    if(loading && isInit){
      return(
        <React.Fragment>
          <Paginator
            {...pageInfo}
            onPage={this.onSelectedPage}
          />
          <Spinner />
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
          onPage={this.onSelectedPage}
        />
        <BookList 
          books={books}
          onAddedToCart={onAddedToCart}
        />
      </React.Fragment>
    );

    
  }
}

const mapStateToProps = ({ bookList: { books, loading, error, page, numPages, nextPage, prevPage, isInit } }) => {
  return { books, loading, error, page, numPages, nextPage, prevPage, isInit };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    fetchBooks,
    setPage,
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);