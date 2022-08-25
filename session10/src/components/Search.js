import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchBar(keyword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p> {keyword && "Search for your favourite books here!"} </p>
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
