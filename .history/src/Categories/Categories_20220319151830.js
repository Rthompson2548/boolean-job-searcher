import React, { useState } from "react";
import "./Categories.css";
import "../App.css"

const Categories = ({ handleAddCategory, addCategory, setAddCategory, experience, setExperience, experienceList, handleAddExperience, experienceWord, handleExperienceWordChange, handleAddToExperienceList, showExperienceString, setShowExperienceString, handleSubmitExperienceString, showCategoryName, categoryName, handleChangeCategoryName, addCategoryName, showFirstCategoryButton, setExperienceList, setExperienceWord }) => {

    return (
        <div className="categories">
            
           
                            

                   
                        <div>
                            <h1>{categoryName}</h1>
                            <label id="experience">Add a keyword</label>
                            <input
                                id="experience"
                                type="text"
                                placeholder="Enter a key word..."
                                value={experienceWord}
                                // onChange={handleExperienceWordChange}
                                onChange={(e) => setExperienceWord(e.target.value)}
                            />               

                            {/* to do: add "OR" to string on click */}
                            <div className="btn-container">
                                <button
                                    // onClick={handleAddToExperienceList}
                                    onClick={() => {
                                        setExperienceList(previous => [...previous, experienceWord])
                                    }
                                    
                                >
                                    Add
                                </button>
                            </div>

                            {/* TODO: ONLY SHOW SUBMIT BUTTON IF MORE THAN ONE (pop up message that says best practice is too add as many as possible) */}
                            <div className="btn-container">
                                 <button onClick={handleSubmitExperienceString}>Submit</button>
                            </div>

                            {
                                showExperienceString === true &&
                                <div>       
                                        <div>
                                            {experienceList.join(" ")}
                                        </div>

                                        <div className="btn-container">
                                            <button onClick={handleAddCategory}>
                                                Add Category
                                            </button>
                                        </div>
                                            
                                        
                                        
                                </div> 
                            }
                           
                        </div>  
                        : null
                    }
                </div>

                
            </div>
        </div>
    )
}

export default Categories;