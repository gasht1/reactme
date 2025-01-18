import React from "react";
import { catagories } from "../../App";

const ExpenseRform = () => {
  return (
    <form className=" ml-20">
      <div className="mb-3">
        <label htmlFor="description">description</label>
        <input id="description" type="text" className="input" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount">amount</label>
        <input id="amount" type="text" className="inputAmount" />
      </div>
      <div className="mb-3">
        <label htmlFor="category">category</label>
        <select name="" id="category">
          <option></option>
          {catagories.map((category) => (
            <option value="category">{category}</option>
          ))}
        </select>
      </div>
      <button className="">submit</button>
    </form>
  );
};

export default ExpenseRform;
