import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home/Home";

const App = () => {

  const [word, setWord] = useState("");

  useEffect((e) => {

  }, [word])

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Search Boolean Generator</h1>
      </div>
      <div>
        <label id="experience">Add a keyword</label>
        <input
          id="experience"
          type="text"
          placeholder="Enter a key word..."
          value={word}
          // onChange={handleExperienceWordChange}
        />

        {/* to do: add "OR" to string on click */}
        <div className="btn-container">
          <button>Add</button>
        </div>

        <div className="btn-container">
          <button onClick={}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default App;
