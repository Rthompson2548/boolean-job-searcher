// import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  let searchCategories = [
    "Experience",
    "Location",
    "End",
    "Title",
    "Technologies",
    "Company name"
  ];

  let defaultCategories = [
    {
      name: "Experience",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    },
    {
      name: "Location",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    },
    {
      name: "End",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    },
    {
      name: "Title",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    },
    {
      name: "Technologies",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    },
    {
      name: "Company Name",
      placeholders: ["Junior", "Entry", "Grad", "Student"]
    }
  ];

  const [addCategory, setAddCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryOptions, setCategoryOptions] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showNewCategoryButton, setShowNewCategoryButton] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showAddWordBtn, setShowAddWordBtn] = useState(false);
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [finishBtn, setFinishBtn] = useState(false);
  const [result, setResult] = useState([]);

  const handleNewCategory = () => {
    // setAddCategory(true);
    setCategory("");
    setShowNewCategoryButton(false);
    setFinishBtn(false);
    // setShowCategoryForm(true);
    setCategoryOptions(true);
  };

  const handleCustomCategory = () => {
    setShowCategoryForm(true);
    setCategoryOptions(false);
  };

  const handleCategoryNameChange = (event) => {
    setCategory(event.target.value);
  };

  const submitCategory = () => {
    setAddCategory(false);
    setShowName(true);
    setShowNewCategoryButton(false);
    setShowAddWordBtn(true);
    setShowForm(true);
    setShowCategoryForm(false);
  };

  const handleAddWord = () => {
    setShowForm(true);
    setCategoryOptions(false);
  };

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const submitWord = () => {
    setList((prevList) => [...prevList, `"${word}"`]);
    setWord("");
    setShow(true);
  };

  useEffect(() => {
    setCategory(category);
  }, [category]);

  let booleanString = `(${list.join(" OR ")})`;

  const handleSubmitCategoryWords = () => {
    setShowNewCategoryButton(true);
    setShow(false);
    setShowName(false);
    setShowForm(false);
    setFinishBtn(true);
    setResult((previousResult) => [...previousResult, booleanString]);
    console.log(result.join(" AND "));
    console.log(`list: ${list}`);
    setList([]);
    console.log(`list: ${list}`);
  };

 
  return (
    <div className="App">
      <h1>Boolean Job Finder</h1>
      <h4>Generate boolean strings to find jobs that match your experience</h4>

      {categoryOptions === true && (
        <div>
          <div>
            <p>Click a category below to start</p>
            <br />

            {/* iterates through array of category names and returns a button for each */}
            <div>
              {searchCategories.map((value, i) => (
                <button
                  id="category-btn"
                  className="category-btn"
                  key={i}
                  value={searchCategories[i]}
                  onClick={() => setCategory(value)}
                >
                  {value}
                </button>
              ))}

              {/* displays the category name form on click */}
              <button onClick={handleCustomCategory}>Other</button>
              <br />
              <button onClick={handleAddWord}>Submit</button>
            </div>

            <br />
          </div>
        </div>
      )}

      {showCategoryForm === true && (
        <div>
          <label>Enter a custom category name</label>
          <input
            placeholder="Enter category name"
            onChange={handleCategoryNameChange}
            value={category}
          />
          <br />
          <button onClick={submitCategory}>Submit</button>
        </div>
      )}

      {showForm === true && (
        <div>
          <div>
            <h2>{category}</h2>
            <br />
            <label>
              Enter a keyword below and click "Add" to include in your search
              statement
            </label>
            <br />
            <input
              placeholder="enter a keyword"
              value={word}
              onChange={handleWordChange}
            />
          </div>
          {/* TODO: add option to del */}
          <button onClick={submitWord}>Add</button>
          {/* <button>Submit</button> */}
        </div>
      )}

      {show === true && (
        <div>
          <h3>{category} boolean:</h3>
          <h4>{booleanString}</h4>
        </div>
      )}

      {showForm === true && (
        <div>
          <br />
          <button onClick={handleSubmitCategoryWords}>
            Submit search statement
          </button>
        </div>
      )}

      {showNewCategoryButton === true && (
        <div>
          <button onClick={handleNewCategory}>
            Add a search statement category
          </button>
        </div>
      )}

      {finishBtn === true && (
        <div>
          <button>Finish</button>
          <h3>Search statement for {category}:</h3>
          {/* <button onClick={copyToClipboard}> */}
          <p>
            {result.join(" AND ")}
          </p>
          {/* </button> */}
          <button>Copy</button>
        </div>
      )}
    </div>
  );
}
