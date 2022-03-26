import React from "react";
import Categories from "../Categories/Categories";
import "./Home.css";
import "../App.css"

const Home = ({ handleAddCategory, addCategory, setAddCategory, handleCreateBoolean, createBoolean, showCategories, addWord, handleAddWord, wordToInclude, handleWordToIncludeChange, handleAddWordToBooleanString, includeList, experience, setExperience, handleAddExperience, experienceList, setExperienceList, experienceWord, setExperienceWord, handleExperienceWordChange, handleAddToExperienceList, showExperienceString, setShowExperienceString, handleSubmitExperienceString, wordSubmitted, handleGenerateString, showString, showCategoryName, handleChangeCategoryName, addCategoryName, categoryName, showFirstCategoryButton, showCreateButton }) => {
    return ( 
        <div className="home">

            {
                showCreateButton === true &&
                <div className="btn-container">
                    <button className="create-boolean-btn" onClick={handleCreateBoolean}>
                        Create a boolean string
                    </button>
                </div>
            }

            <div>
            
                {/* will display when user clicks on the "add a keyword" button */}
                { addWord === true &&
                    <div>
                        <label id="new-word">Enter a word to include in your search</label>
                        <input
                            id="new-word"
                            type="text"
                            placeholder="Enter word..."
                            value={wordToInclude}
                            onChange={handleWordToIncludeChange}
                        />

                        <div className="btn-container">
                            <button
                            onClick={handleAddWordToBooleanString}>
                            Add word
                        </button>
                        </div>

                          
                        
                        
                        <h3>Current string:</h3>
                        {/* displays a string of the current key words added */}
                        <div>       
                            {includeList.join(" ")}
                        </div>
                        
                    </div>
                }
                
            </div>

            {showCategories ?
                <Categories
                    experience={experience}
                    setExperience={setExperience}
                    experienceList={experienceList}
                    setExperienceList={setExperienceList}
                    experienceWord={experienceWord}
                    setExperienceWord={setExperienceWord}
                    handleExperienceWordChange={handleExperienceWordChange}
                    handleAddExperience={handleAddExperience}
                    handleAddToExperienceList={handleAddToExperienceList}
                    showExperienceString={showExperienceString}
                    setShowExperienceString={setShowExperienceString}
                    handleSubmitExperienceString={handleSubmitExperienceString}
                    handleAddCategory={handleAddCategory}
                    addCategory={addCategory}
                    setAddCategory={setAddCategory}
                    showCategoryName={showCategoryName}
                    categoryName={categoryName}
                    handleChangeCategoryName={handleChangeCategoryName}
                    addCategoryName={addCategoryName}
                    showFirstCategoryButton={showFirstCategoryButton}
                />
                : null
            }

        </div>
    )
}

export default Home;