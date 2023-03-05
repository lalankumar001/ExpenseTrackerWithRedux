import React from 'react'
import { FaGithub,FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  return (
    <div>
    <div className='row w-100'>
      <div className='col'><h3>Winner never quite, Quitters never win</h3></div>
      <div className='col'>
      <Link to=""> <button className='btn btn-dark'>Your profile is 64% incompleted A Complet Profile has higher chance of landing a job <b className='text-decoration-underline text-danger'>Complete Now</b></button> </Link></div>
      <br />
      <hr />
      <div className='justify-content-end'>
      <button className='btn btn-danger'>Cancel</button>
         <h1>Contact Details</h1>
         <div className='row'>
       <div className='col'><h3> <FaGithub /> Full Name :</h3><input type='text' /></div>
       <div className='col'><h3><FaGlobe /> Profile Photo URL</h3><input type='text' /></div>
         </div>
      </div>

    </div>
         <button className='btn btn-danger'>Update</button>
    </div>
  )
}

export default UpdateUser