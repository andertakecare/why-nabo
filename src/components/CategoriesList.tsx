import React from "react";
import styled from "styled-components";
import Category from "./Category";

//Styled components
const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 70vw;
  max-width: 70%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const CategoriesListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    flex: 1;
    text-align: center;
  }
`;

const CategoriesList: React.FC = () => {
  // provisional hardcoded data
  const harcodedCategories = [
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
  ];

  return (
    <CategoriesListContainer>
      <CategoriesListHeader>
        <h2>CATEGORIES</h2>
        <h2>BUDGETED</h2>
        <h2>SPENT</h2>
        <h2>REMAINING</h2>
      </CategoriesListHeader>
      {/* Rendering actual Categories */}
      {harcodedCategories.map((category, index) => (
        <Category
          key={index}
          categoryName={category.name}
          budgeted={category.budgeted}
          spent={category.spent}
        />
      ))}
    </CategoriesListContainer>
  );
};

export default CategoriesList;
