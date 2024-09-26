import React, { useState } from "react";

const AddBudgetCategory: React.FC = () => {
    const [category, setCategory] = useState<string>("");

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    return (
        <div>
            <h2>Add a Budget Category</h2>
            <input 
                type="text" 
                placeholder="Enter category" 
                value={category} 
                onChange={handleCategoryChange} 
            />
            <p>Category: {category}</p>
        </div>
    );
};

export default AddBudgetCategory;
