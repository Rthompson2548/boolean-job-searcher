import React, { useState } from "react";

const Categories = ({ setCategory, categoryChosen, setShowForm, setCategoryOptions, setCategoryChosen }) => {

    let searchCategories = [
    "Job Title",
    "Location",
    "Experience Level",
    "Education",
    "Tech Stack",
    "Company Name",
    ];

    // const [category, setCategory] = useState("");
    // const [categoryChosen, setCategoryChosen] = useState(false);
    // const [showForm, setShowForm] = useState(false);
    // const [categoryOptions, setCategoryOptions] = useState(false);

    const handleCategoryClick = (event) => {
    setCategory(event.target.value);
    setCategoryChosen(true);
    };

    const handleAddWord = () => {
        setShowForm(true);
        setCategoryOptions(false);
        setCategoryChosen(true);
    };
    
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
};

export default Categories;