import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Heder.css";
import auth from "../../firebase.init";
const Heder = () => {
  const [user] = useAuthState(auth);
  const handlSignout = () => {
    signOut(auth);
  };

  return (
    <nav className="heder">
      <img src={logo} alt="" />
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button onClick={handlSignout}>Sign out</button>
        ) : (
          <Link to="/Login ">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Heder;
