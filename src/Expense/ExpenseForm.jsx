import React, { useState } from 'react'
import styles from './ExpenseForm.module.css';
const ExpenseForm = () => {
  const [formData, setFormData] =useState(
    {
      amount:'',
      description:'',
      category:'',
    }
  )
  const SubmitHandler = (event) => {
     event.preventDefault();
     console.log('Form submission happened');
  }
  return (
    <div className={styles.ExpenseHeading}>
      <form onSubmit={SubmitHandler}>
        <label className="form-label">Amount:</label>
        <input className="form-control" type="number" name="amount" id="amount" placeholder="₹" required />

        <label className="form-label" >Description:</label>
        <input className="form-control" type="text" name="description" id="description" placeholder="Enter description here..." required />

        <label className="form-label">category:</label>
        <select className="form-select" id="category" name="category" required >
          <option value="movie">Movies</option>
          <option value="tourism">Tourism</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
        </select>
        <button className="btn btn-dark" type='submit'>ADD EXPENCES</button>
      </form>
    </div>
  )
}

export default ExpenseForm