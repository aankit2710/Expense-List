import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      date: new Date(2021, 9, 2),
      amount: 45.07,
    },
    { id: "e2", title: "New Tv", date: new Date(2021, 3, 28), amount: 45.07 },
    {
      id: "e3",
      title: "Car Insurance",
      date: new Date(2021, 1, 8),
      amount: 45.07,
    },
    {
      id: "e4",
      title: "Car Insurance",
      date: new Date(2021, 3, 12),
      amount: 45.07,
    },

    {
      id: "e5",
      title: "New Desk (Wooden)",
      date: new Date(2021, 6, 29),
      amount: 45.07,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
