//import { useState } from "react";
//import Button from "./components/Button";
//import MyAlert from "./components/MyAlert";

import { useState } from "react";
import Expense from "./expense_traker/components/Expense";
import ExpenseForm from "./expense_traker/components/ExpenseForm";

function App() {
  const [selectCatagorey, setselectCatagorey] = useState();
  const [expenseData, setexpenseData] = useState([
    { id: 1, description: " aaaa", amount: 20, category: "utility" },
    { id: 2, description: " bbbb", amount: 30, category: "utility" },
    { id: 3, description: " cccc", amount: 40, category: "utility" },
    { id: 4, description: " ddddd", amount: 50, category: "utility" },
  ]);
  //const [Alertvisible, setAlertvisible] = useState(false);
  return (
    <div>
      <div>
        <ExpenseForm onSelectCategory={(category) => console.log(category)} />
      </div>
      {
        <Expense
          expenses={expenseData}
          ondelete={(id) =>
            setexpenseData(expenseData.filter((e) => e.id !== id))
          }
        />
      }
    </div>
  );
}
export default App;
