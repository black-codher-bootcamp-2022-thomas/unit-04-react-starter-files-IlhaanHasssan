// import React, { useState } from "react";
// import Book from "./components/Book";
// import bookList from "./models/books.json";
import BookList from "./components/BookList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  function handleClick(title) {
    return console.log("this book " + title + " was clicked");
  }

  return (
    <Router>
      <Header />
      <Search />
      <Route
        path="/"
        exact
        render={() => (
          <>
            <h2>Welcome to the Bookcase app</h2>
            <BookList addBook={handleClick} />
          </>
        )}
      />
      <Route path="/bookcase" render={() => <h2>Bookcase Page</h2>} />
    </Router>
  );
}

export default App;
