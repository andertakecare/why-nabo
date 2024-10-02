import React, { useState } from "react";
import "./App.css";
import CategoriesList from "./components/CategoriesList";
import AddBudgetCategory from "./components/AddBudgetCategory";
// import AddBudgetCategory from "./components/AddBudgetCategory";

function App() {
  const [categories, setCategories] = useState([
    {
      name: "Groceries",
      budgeted: 500,
      spent: 150,
    },
    {
      name: "Rent",
      budgeted: 1000,
      spent: 350,
    },
  ]);

  //Function to add a new category
  const addCategory = (newCategory: {
    name: string;
    budgeted: number;
    spent: number;
  }) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <AddBudgetCategory addCategory={addCategory} />
      <CategoriesList />;
    </div>
  );
}

export default App;
