import React, { useState } from 'react';
import Book from './components/Book';
import bookList from './models/books.json';
import  BookList from './components/BookList'


function App() {
  const [myBooksList, setMyBooksList]= useState(bookList);
  function handleClick(title) {
    return (
    console.log("this book " + title + " was clicked"));
  }
  return (
  <BookList addBook={handleClick}> 
    
  </BookList>
  )
}

export default App;

