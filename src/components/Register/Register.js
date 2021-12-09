import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { useAuth } from '../Context/AuthContext'
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const { createWithEmailAndPassword, loginWithGoogle } = useAuth()
  const history = useHistory();

  const register = () => {
    if (!name) alert("Please enter name");
    createWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading, history]);

  return (
    <div className="outer">
      <div className="inner">
        <h3>Register</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </div>
        <button
          className="btn btn-primary btn-sm btn-block"
          onClick={register}>
          Register
        </button>
        <button className="btn btn-secondary btn-sm btn-block" onClick={loginWithGoogle}>
          Register with Google
        </button>
        <div className="mt-3">
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
