import { number } from "zod";

interface Expense {
  id: number;
  category: string;
  amount: number;
  description: string;
}

interface Props {
  expenses: Expense[];
  ondelete: (id: number) => void;
}
const Expense = ({ expenses, ondelete }: Props) => {
  if (expenses.length == 0) return null;
  return (
    <table className="">
      <thead className="">
        <tr className="">
          {" "}
          <th>description</th>
          <th>amount</th>
          <th>category</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {expenses.map((expense) => (
          <tr key={expense.id} className="">
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => ondelete(expense.id)} type="button">
                {" "}
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="">
        <tr>
          <td> total</td>
          <td>
            {" "}
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Expense;
