import React from "react";
import styled from "styled-components";

//Styled components
const CategoryContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  max-width: 100%;
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

//Define props for the Category component
interface CategoryProps {
  categoryName: string;
  budgeted: number;
  spent: number;
}

const Category: React.FC<CategoryProps> = ({
  categoryName,
  budgeted,
  spent
}) => {
    const remaining = budgeted - spent;

  return (
    <CategoryContainer>
      <CategoryName>{categoryName}</CategoryName>
      <CategoryInfo>${budgeted}</CategoryInfo>
      <CategoryInfo>${spent}</CategoryInfo>
      <Remaining remaining={remaining}>${remaining}</Remaining>
    </CategoryContainer>
  );
};

export default Category;
