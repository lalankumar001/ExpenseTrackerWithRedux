import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth , signOut } from 'firebase/auth'
import ExpenseForm from '../../Expense/ExpenseForm'

import { useSelector,useDispatch } from 'react-redux'
import { increment , decrement ,incrementByAmount } from '../../GlobalStore/Reducer'

const Home = () => {
  // showing state
const count =useSelector((state)=>state.counter.value)
const dispatch = useDispatch()


  const navigate = useNavigate();
  const auth = getAuth();
const onSignOut = () =>{
  signOut(auth).then(() => {
   //Sign out sucessfully
   alert('Sign out sucessfully'); 
   navigate("/Login")
  }).catch((error) => {
  // an error occurred
  console.log(error);
  });
}
 
  return (
    <>    
      {/* <button onClick={onSignOut} className='h-25 w-25 justify-content-end btn btn-danger'>sign out</button> */}
    {/* <ExpenseForm />  */}
    <div className='container'>
      <h1 className='text-center'>Counter</h1>
      <h1 className='text-center fs-1'>{count}</h1>
     {/* <button onClick={()=>dispatch(increment())}>Increment</button> */}
     <button onClick={()=>dispatch(decrement(5))}>DecrementBy</button>
     <button onClick={()=>dispatch(incrementByAmount(10))}>IncrementBy</button>
     </div>
    </>

  )
}

export default Home