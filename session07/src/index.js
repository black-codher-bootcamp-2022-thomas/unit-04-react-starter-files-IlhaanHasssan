import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const LogForm = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <h1>Your Details</h1>
      <h2>Please fill in the form details</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
          <label>
            Age
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Results</h2>
        Name: {name}
        Age: {age}
        Location ; {location}
        Submitted: {submitted}
        <br />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<LogForm />);
