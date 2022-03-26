import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Home/Home';

const App = () => {
  const [createBoolean, setCreateBoolean] = useState(false);
  const [addWord, setAddWord] = useState(false);
  const [wordSubmitted, setWordSubmitted] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  /** word lists */
  const [wordToInclude, setWordToInclude] = useState("");
  
  /** string lists */
  const [includeList, setIncludeList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [experienceWord, setExperienceWord] = useState("");
  const [experience, setExperience] = useState(false);
  const [showExperienceString, setShowExperienceString] = useState(false);
  /* entire string result */
  const [showString, setShowString] = useState(false);
  const [showFirstCategoryButton, setShowFirstCategoryButton] = useState(true);
  const [showCreateButton, setShowCreateButton] = useState(true);

  /** app */
  const handleCreateBoolean = () => {
    setCreateBoolean(true);
    setShowCategories(true);
    console.log(createBoolean);
    setShowCreateButton(false);
  }

  /** home */
  const handleAddWord = () => {
    setAddWord(true);
  }

  const handleWordToIncludeChange = (event) => {
    setWordToInclude(event.target.value);
    // console.log(`current word state: ${event.target.value}`);
  }

  const handleAddWordToBooleanString = () => {
    // adds current word to the boolean string
    setIncludeList((includeList) => [...includeList, wordToInclude]);
    setIncludeList((includeList) => [...includeList, " "]);
    // console.log(`adding ${wordToInclude} to list: ${includeList}`);
    // console.log(`list: ${JSON.stringify(includeList)}`);
    setWordSubmitted(true);
    setWordToInclude("");
  }

  const handleGenerateString = () => {
    setShowString(true);
    setWordSubmitted(false);
  }


  /** experience */

  /** displays experience input on click */
  const handleAddExperience = () => {
    setShowCategoryName(true);
    setShowFirstCategoryButton(false)
  }

  const handleExperienceWordChange = (event) => {
    setExperienceWord(event.target.value);
    // console.log(`updating experience keyword: ${event.target.value}`);
  }
  

  const handleAddToExperienceList = () => {
    setExperienceList(experienceList)
    /** adds a '(' to the beginning of the first string for correct syntax */
    console.log(`keyword: ${experienceWord}`);
    console.log(`list: ${experienceList}`);
    if (experienceList.length === 0) {
      setExperienceList((experienceList) => [...experienceList, `("${experienceWord}"`]);

    } else {
      /** adds an 'or' before all following strings in the boolean search group category */
      setExperienceList((experienceList) => [...experienceList, `OR "${experienceWord}"`]);
    }
    
    setExperienceWord("");
  }

  /** displays string in boolean search syntax () */
  const handleSubmitExperienceString = () => {
    experienceList.pop();
    experienceList.push(")");
    setShowExperienceString(true);
  }

  const [showCategoryName, setShowCategoryName] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const handleAddCategory = () => {
      /** hides the 'add category' button and current string */
      setShowExperienceString(false);
      setExperience(false);
        /** add "AND (" */
      setExperienceList((experienceList) => [...experienceList, `AND (`]);  
      setShowCategoryName(true);
      setCategoryName("");
  }


  const [categoryName, setCategoryName] = useState("");
  const handleChangeCategoryName = (event) => {
    setCategoryName(event.target.value);
  }

  const addCategoryName = () => {
    console.log(`category name: ${categoryName}`);
    /** hides the category name input field and displays the value of the category name on the page */
    setShowCategoryName(false);
    setExperience(true);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className='title'>Search Boolean Generator</h1>
        {/* <h3>Header</h3> */}
      </div>
      
    </div>
  );
}

export default App;
