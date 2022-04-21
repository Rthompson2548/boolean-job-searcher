import React, { useState } from "react";
import "./Categories.css";
import "../App.css"

const Categories = ({ handleAddCategory, addCategory, setAddCategory, experience, setExperience, experienceList, handleAddExperience, experienceWord, handleExperienceWordChange, handleAddToExperienceList, showExperienceString, setShowExperienceString, handleSubmitExperienceString, showCategoryName, categoryName, handleChangeCategoryName, addCategoryName, showFirstCategoryButton, setExperienceList, setExperienceWord }) => {

    return (
        <div className="categories">
            
           
                            

                   
                        <div>
                            
                            <label id="experience">Add a keyword</label>
                            <input
                                id="experience"
                                type="text"
                                placeholder="Enter a key word..."
                                value={experienceWord}
                                // onChange={handleExperienceWordChange}
                            />               

                            {/* to do: add "OR" to string on click */}
                            <div className="btn-container">
                                <button>
                                    Add
                                </button>
                            </div>

                            
                            <div className="btn-container">
                                 <button onClick={handleSubmitExperienceString}>Submit</button>
                            </div>

                          
                           
                        </div>  
                </div>

                
            </div>
        </div>
    )
}

export default Categories;