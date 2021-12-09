import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { useAuth } from '../Context/AuthContext'
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const { login, loginWithGoogle } = useAuth()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading, history]);

  return (
    <div className="outer">
      <div className="inner">
        <h3>Log in</h3>
        <div className="form-group">
          <label>Email</label>
          <input type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password" />
        </div>
        <button
          className="btn btn-primary btn-sm btn-block"
          onClick={() => login(email, password)}>
          Login
        </button>
        <button className="btn btn-secondary btn-sm btn-block" onClick={loginWithGoogle}>
          Login with Google
        </button>
        <div className="mt-3">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login;