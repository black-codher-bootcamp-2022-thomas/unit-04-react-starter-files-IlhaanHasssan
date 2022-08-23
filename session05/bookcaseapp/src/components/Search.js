import React, { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    findBooks();
  };
  const findBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;

    console.log("url: ", url);
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p> {keyword && "Keywords typed"} </p>
        <div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Search;
