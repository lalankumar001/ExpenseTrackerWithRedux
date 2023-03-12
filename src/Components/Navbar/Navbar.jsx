import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaToggleOn } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { authActions } from "../../GlobalStore/Reducer/Auth";
import styles from "./Navbar.module.css";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const clickHandler = () => {
    signOut(auth).then(() => {
      alert('Sign-out successful')
    }).catch((error) => {
      alert('An error occurred');
    });
    if (isAuthenticated) {
      // means logout
       dispatch(authActions.logout());
       navigate('/Login');
  } else {
      // means login
      dispatch(authActions.login());
      navigate('/Home/UpdateUser');
  }
};

  // Dark mode Toggle button handler 
  const darkModeHandler = () => {
    var element = document.body;
    element.classList.toggle(styles['dark']);
  }

  return (
    <div className={styles.navbaritems}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link to="/about" className="navbar-brand fs-2 fw-2 text-info">
            My-Expense
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center fs-3 fw-1"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  to="/Home/UpdateUser"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Expenses" className="nav-link">
                  Expenses
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  Aboutus
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contactus
                </Link>
              </li>

              <li className="nav-item" onClick={clickHandler}>
                <Link to="/Login" className="nav-link">
                {isAuthenticated ? "Logout" : "Login"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Dark item toggler */}
        <div className="nav-item fs-1 btn btn-dark mx-5"> <FaToggleOn onClick={darkModeHandler} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
