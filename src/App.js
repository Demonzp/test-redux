import React from 'react';
import BookList from './components/BookList';
import BookListHooksContainer from './components/BookListHooks';
import ShoppingCartTable from './components/ShoppingCartTable';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookListHooksContainer />
      <ShoppingCartTable />
    </div>
  );
}

export default App;