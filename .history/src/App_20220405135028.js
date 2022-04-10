import "./styles.css";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState, useEffect, useRef } from "react";



export default function App() {
  let searchCategories = [
    "Experience",
    "Location",
    "Tech Stack",
    "Title",
    "Technologies",
    "Company"
  ];

let defaultCategories = [
  {
    id: 1,
    name: "Experience",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  },
  {
    id: 2,
    name: "Location",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  },
  {
    id: 3,
    name: "End",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  },
  {
    id: 4,
    name: "Title",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  },
  {
    id: 5,
    name: "Technologies",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  },
  {
    id: 6,
    name: "Company Name",
    placeholders: ["Junior", "Entry", "Grad", "Student"]
  }
];


const [copyString, setCopyString] = useState("");
const [addCategory, setAddCategory] = useState(false);
const [addCategoryBtnText, setAddCategoryBtnText] = useState(
"Start my job search"
)
const [category, setCategory] = useState("");
const [categoryChosen, setCategoryChosen] = useState(false);
const [categoryOptions, setCategoryOptions] = useState(false);
const [showCategoryForm, setShowCategoryForm] = useState(false);
const [showNewCategoryButton, setShowNewCategoryButton] = useState(true);
const [showName, setShowName] = useState(false);
const [showForm, setShowForm] = useState(false);
const [showAddWordBtn, setShowAddWordBtn] = useState(false)
const [word, setWord] = useState("");
const [list, setList] = useState([]);
const [show, setShow] = useState(false);
const [finishBtn, setFinishBtn] = useState(false);
const [finished, setFinished] = useState(false);
const [result, setResult] = useState([]);
const [doneWarning, setDoneWarning] = useState(false);
const [goodbyeMessage, setGoodbyeMessage] = useState(false);


const handleNewCategory = () => {
  setCategory("");
  setAddCategoryBtnText("Add a category");
  setShowNewCategoryButton(false);
  setFinishBtn(false);
  setCategoryOptions(true);
  setCategoryChosen(false);
};



const handleCustomCategory = () => {
  setShowCategoryForm(true);
  setCategoryOptions(false);
};


const handleCategoryNameChange = event => {
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
  setCategoryChosen(true);
};


const handleCategoryClick = event => {
  setCategory(event.target.value);
  setCategoryChosen(true);
};


const handleWordChange = event => {
  setWord(event.target.value);
};


  const [noLetters, setNoLetters] = useState(false);

  const submitAsteriskWord = () => {
    if (word.length <= 1) {
      setNoLetters(true);
    } else {
      setList((prevList) => [...prevList, `"${word}*"`]);
      setWord("");
      setShow(true);
      console.log(word);
    }
  };

  const submitWord = () => {
    if (word.length <= 1) {
      setNoLetters(true);
    } else {
      setList((prevList) => [...prevList, `"${word}"`]);
      setWord("");
      setShow(true);
      console.log(word);
    }
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
    setCopyString(result.join(" AND "));
  };

  const handleGenerateString = () => {
    setFinished(true);
    setFinishBtn(false);
    setShowNewCategoryButton(false);
    setDoneWarning(false);
    // setGoodbyeMessage(true);
  };

const handleDone = () => {
  setDoneWarning(true);
  setFinished(false);
};


const handleConfirmFinished = () => {
  setDoneWarning(false);
  setGoodbyeMessage(true);
  setShow(false);
  setFinished(false);
};



  return (
    <div className="App">
      <div className="header">
        <h1 className="app-title">Boolean Job Finder</h1>
      </div>
      <div>
    </div>


      {categoryOptions === true && (
        <div>
          <div>
<p className="pick-a-category-txt">Click a category below to start</p>


            {/* iterates through array of category names and returns a button for each */}
            <div className="category-btns">
              {searchCategories.map((value, i) => (
                <button
                  id="category-btn"
                  className="category-btn"
                  key={i}
                  value={searchCategories[i]}
                  onClick={handleCategoryClick}
                >
                  {value}
                </button>
              ))}

            </div>

{
  categoryChosen === true && (
    <button className="continue-btn" onClick={handleAddWord}>
      Continue
    </button>
  )
}
          </div>
        </div>
      )}

{
  showCategoryForm === true && (
    <div>
      <label>Enter a custom category name</label>
      <input
        placeholder="Enter category name"
        onChange={handleCategoryNameChange}
        value={category}
      />

<button onClick={submitCategory}>Submit</button>;

    </div>
  )
}

      {showForm === true && (
        <div className="keyword-form">
          <h1>{category}</h1>

          <div className="keyword-form-info">
            <div>
              <label>Enter 1 or more keywords</label>
            </div>
            <input
              placeholder="Enter two or more letters..."
              value={word}
              onChange={handleWordChange}
            />
          </div>

          <div className="keyword-btns">
            <button onClick={submitWord}>Include exact keyword</button>
            <button onClick={submitAsteriskWord}>
              Include similar keywords
            </button>
        
          </div>
          

        </div>
      )}

      {show === true && (
        <div className="keyword-string">
          <h4>{booleanString}</h4>
        </div>
      )}

      {showForm === true && (
        <div>
          <button className="continue-btn" onClick={handleSubmitCategoryWords}>
            Continue
          </button>
        </div>
      )}

      {showNewCategoryButton === true && (
        <div>
          <div>
            <h3>What is a boolean search?</h3>
            <p>
              Boolean searches are heavily used among recruiters for sourcing great
              candidates by identifying whether or not they meet various criteria specific
              to the job.
            </p>
            <h3>Why should you use them?</h3>
            <p>

              Just as boolean searches help recruiters filter out unfit candidates, candidates can use them to filter out jobs that aren't a good fit. It's time for those of us on the job hunt to start taking advantage of  using recruiter methods to your advantage so you can be identified by recruiters for your dream jobs. 
            </p>
          </div>

          <button className="start-btn" onClick={handleNewCategory}>
            {addCategoryBtnText}
          </button>
        </div>
      )}


      {finishBtn === true && (
        <div>
          <button className="done-btn" onClick={handleGenerateString}>
            Submit
          </button>
        </div>
      )}

      {finished === true && (
        <div className="boolean-string">
          <p value={copyString}>{result.join(" AND ")}</p>
          <button className="done-btn" onClick={handleDone}>
            Done
          </button>
        </div>
      )}

      {doneWarning === true && (
        <div className="boolean-string">
          <p>Are you sure? This cannot be undone</p>
          <button className="done-btn" onClick={handleConfirmFinished}>
            Yes, I am done
          </button>
        </div>
      )}

      {goodbyeMessage === true && (
        <div className="goodye-msg boolean-string">
<p>Goodbye!</p>;

          <button
            className="start-btn"
            onClick={() => window.location.reload(false)}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}
