import books from './../models/books.json'
import Book from './Book'
import React, { useState } from 'react';

const BookList=(props)  => {
    const [myBooksList, setMyBooksList]= useState(books);

    return (
        myBooksList.map(book => <Book book={book} onClick={() => console.log("hello")} />
    ))
}

export default BookList