import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import About from "./pages/About";
import data from "./models/local-books.json";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [keyword, setKeyword] = useState("");

  const addToBookcase = (id) => {
    setBookcase((books.filter((book) => book.id === id)));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = true;
        }
        return book;
      }),
    ]);
  };

  useEffect(() => {
    findBooks(keyword, startIndex);
  }, [startIndex, keyword]);
  const findBooks = async (keyword, startIndex) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startindex=${startIndex}&maxResults=10&orderBy=newest`;

    console.log("url: ", url);
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    console.log(result.items);
    if (!result.error) {
      setBooks(result.items);
    }
  };

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter((book) => book.id !== id));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = false;
        }
        return book;
      }),
    ]);
  };

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header bookLength={bookcase.length} />
                <Search
                  searchBar={findBooks}
                  setKeyword={setKeyword}
                  keyword={keyword}
                />
                <Pagination
                  setStartIndex={setStartIndex}
                  startIndex={startIndex}
                />
                <BookList
                  books={books}
                  stored="library"
                  addToBookcase={addToBookcase}
                  removeFromBookcase={removeFromBookcase}
                />
              </>
            }
          />
          <Route
            path="/bookcase"
            element={
              <>
                <Header bookLength={bookcase.length} />
                <BookList
                  books={bookcase}
                  stored="bookcase"
                  addToBookcase={addToBookcase}
                  removeFromBookcase={removeFromBookcase}
                />
              </>
            }
          />
          <Route
            path="/about"
            component={() => <About bookLength={bookcase.length} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
