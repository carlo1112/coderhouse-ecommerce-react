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
    if (!name) alert("Ingrese su nombre");
    createWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading, history]);

  return (
    <div className="outer">
      <div className="inner">
        <h3>Crear cuenta</h3>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
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
            placeholder="Contraseña" />
        </div>
        <button
          className="btn btn-primary btn-sm btn-block"
          onClick={register}>
          Crear
        </button>
        <button className="btn btn-secondary btn-sm btn-block" onClick={loginWithGoogle}>
          Crear con Google
        </button>
        <div className="mt-3">
          ¿Ya tenés una cuenta? <Link to="/">Ingresá</Link> ahora.
        </div>
      </div>
    </div>
  );
}

export default Register;
