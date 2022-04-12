import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Singup.css";
const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleComfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("You tow password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="from-contaoner">
      <div>
        <h1 className="from-taitle"> Sign up </h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="passeord">passeord</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="passeord"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm-passeord"> Confirm passeord</label>
            <input
              onBlur={handleComfirmPasswordBlur}
              type="password"
              name=" Confirm-passeord"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="from-submit" type="submit" value="Sign up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="from-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
