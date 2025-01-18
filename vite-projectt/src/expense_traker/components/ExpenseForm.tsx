import React from "react";
import { catagories } from "../../App";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseForm = ({ onSelectCategory }: Props) => {
  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      <option>All category</option>
      {catagories.map((category) => (
        <option value="category">{category}</option>
      ))}
    </select>
  );
};

export default ExpenseForm;
