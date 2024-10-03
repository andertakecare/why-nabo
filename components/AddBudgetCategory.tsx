import React, { useState } from "react";

interface AddBudgetCategoryProps {
  addCategory: (newCategory: {
    name: string;
    budgeted: number;
    spent: number;
  }) => void;
}

const AddBudgetCategory: React.FC<AddBudgetCategoryProps> = ({ addCategory }) => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    const newCategory = {
      name: category,
      budgeted: 0,
      spent: 0,
    };
    addCategory(newCategory); //call the addCategory function from the props
    setCategory("");
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
      <button onClick={handleAddCategory}>Add Category</button>
      {<p>Category: {category}</p> }
    </div>
  );
};

export default AddBudgetCategory;
