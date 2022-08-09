import React, { useState } from 'react';
import Book from './components/Book';
import bookList from './models/books.json';

function App() {
  const books = bookList;
  const [myBooksList, setMyBooksList]= useState(bookList);
  return myBooksList.map(bookItem => <Book book={bookItem}/>) 
}

export default App;

