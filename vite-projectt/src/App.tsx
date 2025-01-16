//import { useState } from "react";
//import Button from "./components/Button";
//import MyAlert from "./components/MyAlert";

import Expense from "./expense_traker/components/Expense";

const expenseData = [
  { id: 1, description: " aaaa", amount: 20, category: "utility" },
  { id: 2, description: " bbbb", amount: 30, category: "utility" },
  { id: 3, description: " cccc", amount: 40, category: "utility" },
  { id: 4, description: " ddddd", amount: 50, category: "utility" },
];
function App() {
  //const [Alertvisible, setAlertvisible] = useState(false);
  return (
    <div>
      {
        <Expense
          expenses={expenseData}
          ondelete={(id) => console.log("delete", id)}
        />
      }
    </div>
  );
}
export default App;
