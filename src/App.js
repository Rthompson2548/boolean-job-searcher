import "./styles.css";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState, useEffect, useRef } from "react";
// import "./data.js";
export default function App() {
  let searchCategories = [
    "Job Title",
    "Location",
    "Experience Level",
    "Education",
    "Tech Stack",
    "Company Name",
  ];

  const [copyString, setCopyString] = useState("");
  const [addCategory, setAddCategory] = useState(false);
  const [addCategoryBtnText, setAddCategoryBtnText] =
    useState("Start finding jobs");
  const [category, setCategory] = useState("");
  const [categoryChosen, setCategoryChosen] = useState(false);
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
    setCategoryChosen(true);
  };

  const handleCategoryClick = (event) => {
    setCategory(event.target.value);
    setCategoryChosen(true);
  };

  const handleWordChange = (event) => {
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
    <div
      className="App">
      <h1>Boolean Job Finder</h1>
     
      {categoryOptions === true && (
        <div>
          <div className="what-why-info">
            <h2>Categories</h2>
            <p>
              Using{" "}
              <a
                href="https://library.alliant.edu/screens/boolean.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                search operators
              </a>{" "}
              enable us to break down our searches into categories and add
              multiple keywords in each category. As a job searcher, for
              example, you can specify a variety of job locations, titles and
              company names.
            </p>
            <p>Select a category below to get started</p>
          </div>

          <div className="category-form">
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

              {categoryChosen === true && (
                <button className="continue-btn" onClick={handleAddWord}>
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showCategoryForm === true && (
        <div className="input-label">
          <label>Enter a custom category name</label>
          <input
            placeholder="Enter category name"
            onChange={handleCategoryNameChange}
            value={category}
          />

          <button className="submit-btn" onClick={submitCategory}>
            Submit
          </button>
        </div>
      )}

      {showForm === true && (
        <div className="keyword-form">
          <div className="what-why-info">
            <h2>{category}</h2>
            <div className="category-btns">
              <div>
                <label>Enter 1 or more keywords</label>
                <input
                  placeholder="Enter two or more letters..."
                  value={word}
                  onChange={handleWordChange}
                />
              </div>

              <div>
                <button className="keyword-btn pink" onClick={submitWord}>
                  Exact word
                </button>

                <button className="keyword-btn" onClick={submitAsteriskWord}>
                  Begins with word
                </button>

                {showForm === true && (
                  <div className="category-btns">
                    <button
                      className="blue-bg"
                      onClick={handleSubmitCategoryWords}
                    >
                      Next category
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {show === true && (
        <div className="keyword-string">
          <h4>{booleanString}</h4>
        </div>
      )}

      {showNewCategoryButton === true && (
        <div className="what-why-info">
          <h2>It's time to starting finding jobs tailored to you.</h2>

          <p>
            <a
              href="https://www.toolbox.com/hr/recruitment-onboarding/articles/what-is-boolean-search-in-recruiting-process-with-examples-for-google-and-linkedin/#:~:text=Boolean%20search%20in%20recruitment%20is,management%20(CRM)%20solution%2C."
              target="_blank"
              rel="noopener noreferrer"
            >
              Boolean searches
            </a>{" "}
            utilize mathematical operators, such as "AND" and "OR", to specify
            requirements that generate relevant results.
          </p>
          <p>
            This method is widely used by recruiters to identify top candidates
            based on job description requirements. But just as recruiters use
            them to source applications who fit the position, job seekers can
            use them to{" "}
            <a
              href="https://www.linkedin.com/pulse/using-boolean-searches-source-your-next-job-kip-brookbank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              find their next job
            </a>
            .
          </p>

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
          <p className="what-why-info">
            Job search string complete! Copy and paste to start finding jobs
            now.
          </p>
          <p className="boolean-string-txt" value={copyString}>
            {result.join(" AND ")}
          </p>
          <button className="done-btn" onClick={handleDone}>
            Finished
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
        <div className="boolean-string">
          <p>Goodbye!</p>

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
