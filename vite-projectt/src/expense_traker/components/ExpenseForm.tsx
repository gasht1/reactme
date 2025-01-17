import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseForm = ({ onSelectCategory }: Props) => {
  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">AllCategory</option>
      <option value="utility">utility</option>
      <option value="category">category</option>
      <option value="groceries">Groceries</option>
    </select>
  );
};

export default ExpenseForm;
