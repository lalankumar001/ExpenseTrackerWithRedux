import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incrementByAmount,
} from "../../GlobalStore/Reducer/Counter";

const Home = () => {
  // showing state
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const auth = getAuth();
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign out sucessfully
        alert("Sign out sucessfully");
        navigate("/Login");
      })
      .catch((error) => {
        // an error occurred
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={onSignOut}
        className="h-25 w-25 justify-content-end btn btn-danger"
      >
        sign out
      </button>
      {/* <ExpenseForm />  */}
      <div className="container">
        <h1>Welcome to user profile</h1>
        <h1 className="text-center">Counter</h1>
        <h1 className="text-center fs-1">{count}</h1>
        {/* <button onClick={()=>dispatch(increment())}>Increment</button> */}
        <button onClick={() => dispatch(decrement(5))}>DecrementBy</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          IncrementBy
        </button>
      </div>
    </>
  );
};

export default Home;
