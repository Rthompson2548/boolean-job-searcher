import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {

  const [word, setWord] = useState("");

  useEffect((e) => {
    setWord(e.target.value);
  }, [word]);



  return (
    <div className="App">
      <h1>HEHEHEHEHEHEh</h1>
    </div>
  );
};

export default App;
