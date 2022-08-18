import books from './../models/books.json'
import Book from './Book'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BookList=(props)  => {
    const [myBooksList, setMyBooksList]= useState(books);

    return (
        myBooksList.map(book => <Book addBook={props.addBook} book={book}/>)
    )
}

export default BookList