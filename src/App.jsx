import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import ExpenseForm from "./Expense/ExpenseForm";
import UpdateUser from "./Components/Auth/UpdateUser";

function App() {
  return (
    <div className="App">
    <Navbar/> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path ="/Expenses" element={<ExpenseForm />} />
        <Route exact path="/Home/UpdateUser" element={<UpdateUser />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<ContactUs />} />
        {/* Login or sign in page */}

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
