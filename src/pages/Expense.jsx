import React, { useEffect, useState } from "react";
import ExpenseForm from "../Expense/ExpenseForm";

const Expense = () => {
  const [isShown, setIsShown] = useState(false);
  const [expenses, setExpenses] = useState({});

  const expenseToggleHandler = () => {
    setIsShown((prev) => !prev);
  };

  useEffect(() => {
    fetch(
      "https://expensetracker-30ad5-default-rtdb.firebaseio.com/expenses.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(data.message);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setExpenses(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteHandler = (key) => {
    const url = `https://expensetracker-30ad5-default-rtdb.firebaseio.com/expenses/${key}.json`;
    fetch(url, { method: "delete" })
      .then((res) => res.json())
      .then(() => {
        setExpenses((prev) => {
          const updatedState = { ...prev };
          delete updatedState[key];
          return updatedState;
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {!isShown && <button onClick={expenseToggleHandler}>Add Expense</button>}
      {!isShown && expenses && (
        <div className="container bg-dark fluid p-2">
          {Object.keys(expenses).map((item) => (
            <div className="card bg-secondary" key={item}>
              {expenses[item].amount}
              <button className="btn btn-primary">edit</button>
              <button
                onClick={() => {
                  deleteHandler(item);
                }}
                className="btn btn-danger"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
      {isShown && <ExpenseForm onExpenseToggle={expenseToggleHandler} />}
    </div>
  );
};

export default Expense;
