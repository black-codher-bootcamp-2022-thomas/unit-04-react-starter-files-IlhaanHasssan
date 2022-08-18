import React from "react";


const Search = (props) => {
const handleSubmit = (e) => {
    e.preventDefault();
    props.findBooks(props.keyword);
  };

return (
  <div>
    {/* //...Add input/submit button here */}
    <form onSubmit={handleSubmit}>
      <label>
        Search
        <input
          value={props.keyword}
          onChange={(e) => {
            props.setKeyword(e.target.value);
          }} > <button>

          </button>
          <p> {props.keyword && "Keywords typed"} </p>
        </input>
      </label>
    </form>
  </div>
)};

export default Search;
