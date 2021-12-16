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
        <h3>Ingresar</h3>
        <div className="form-group">
          <label>Email</label>
          <input type="email"
            className="form-control"
            placeholder="Ingresar email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Contraseña</label>
          <input type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresar contraseña" />
        </div>
        <button
          className="btn btn-primary btn-sm btn-block"
          onClick={() => login(email, password)}>
          Ingresar
        </button>
        <button className="btn btn-secondary btn-sm btn-block" onClick={loginWithGoogle}>
          Ingresar con Google
        </button>
        <div className="mt-3">
          ¿No tenés una cuenta? <Link to="/register">Crear cuenta</Link> ahora.
        </div>
      </div>
    </div>
  );
}

export default Login;