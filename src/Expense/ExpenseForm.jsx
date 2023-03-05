import React, { useState } from 'react'
import styles from './ExpenseForm.module.css';
const ExpenseForm = () => {
  const [userData, setUserData] = useState({
    amount: "",
    description: "",
    value: "",
  });

  let amount, value,description;
  const postUserdata = (event) => {
    amount = event.target.amount;
    description = event.target.description;
    value = event.target.value;

    setUserData({ ...userData, [amount]: value });
  };
  // connect with firebase
  const submitdata = (event) => {
    event.preventDefault();
    const { amount, description, value } = userData;
    if (amount && description && value) {
      const res = fetch(
        "https://expensetracker-30ad5-default-rtdb.firebaseio.com/.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            description,
            value,
          }),
        }
      );
      if (res) {
        alert("Message has been sent");
        setUserData({
          amount: "",
          description: "",
          value: "",
        });
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className={styles.ExpenseHeading}>
 <h2>Expence Tracker</h2>

<form>
  <label className="form-label">Choose Expence Amount:</label>
  <input className="form-control" type="number" name="amount" id="amount" placeholder="Enter your expence amount here..." required value={userData.amount} onChange={postUserdata} />

  <label className="form-label" >Choose Description:</label>
  <input className="form-control" type="text" name="description" id="description" placeholder="Enter description here..." required  value={userData.description} onChange={postUserdata}/>

  <label className="form-label">Choose a category:</label>
  <select className="form-select" id="category" name="category" required  value={userData.value} > 
    <option value="movie" onChange={postUserdata}>Movies</option>
    <option value="tourism" onChange={postUserdata}>Tourism</option>
    <option value="food" onChange={postUserdata}>Food</option>
    <option value="shopping" onChange={postUserdata}>Shopping</option>
  </select>
  <button className="btn btn-dark" type='submit' onClick={submitdata}>ADD EXPENCES</button>
</form>
    </div>
  )
}

export default ExpenseForm