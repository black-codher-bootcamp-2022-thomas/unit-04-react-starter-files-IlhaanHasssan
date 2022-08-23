import books from 'https://www.googleapis.com/books/v1/volumes?q=book&filter=paid-ebooks&print-type=books&projection=lite'
import Book from './Book'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BookList=(props)  => {
    const [myBooksList, setMyBooksList]= useState(books);

    return (
        myBooksList.map(book => <Book addBook={props.addBook} book={book}/>)
    )
};

export default BookList