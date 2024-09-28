import React from "react";
import styled from "styled-components";
import Category from "./Category";

//Styled components
const CategoriesListContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 70vw;
  max-width: 70%;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const CategoryName = styled.h3`
  margin: 0 10px 0 0;
  color: #333;
  border-right: 1px solid #ddd;
  padding-right: 10px;
  text-align: center;
  flex: 1;
`;

const CategoryInfo = styled.p`
  margin: 0 10px;
  color: #555;
  border-right: 1px solid #ddd;
  padding-right: 10px;
  text-align: center;
  flex: 1;

  &:last-child {
    border-right: none;
  }
`;

// Add prop types for the Remaining component
interface RemainingProps {
  remaining: number;
}

// Dynamically color "remaining" based on value
const Remaining = styled(CategoryInfo)<RemainingProps>`
  color: ${(props) =>
    props.remaining >= 0
      ? "#28a745"
      : "#dc3545"}; // Dynamically color the remaining based on value
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
        {harcodedCategories.map((category, index)) => {
            <Category>

            </Category>

        }}
    </CategoriesListContainer>
  );
};

export default CategoriesList;
