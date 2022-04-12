import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handlEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlPasswordlBlur = (event) => {
    setPassword(event.target.value);
  };

  const handluserSignin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  return (
    <div className="from-contaoner">
      <div>
        <h1 className="from-taitle">Login </h1>
        <form onSubmit={handluserSignin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handlEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="passeord">passeord</label>
            <input
              onBlur={handlPasswordlBlur}
              type="password"
              name="passeord"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="from-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-Jhon?{" "}
          <Link className="from-link" to="/singup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
