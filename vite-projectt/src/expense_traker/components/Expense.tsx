interface expense {
  category: string;
}
const Expense = () => {
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
        <thead className="">
          <td>description</td>
          <td>amount</td>
          <td>category</td>
          <td>
            <button type="button"> Delete</button>
          </td>
        </thead>
      </tbody>
    </table>
  );
};

export default Expense;
