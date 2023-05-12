import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loading, error, user, readUser } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginForm;

  const handleChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitReadUser = async (e) => {
    e.preventDefault();
    await readUser(email, password);
  };

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
    <div className="login">
    
     <br/>
      <form className="for"
        onSubmit={handleSubmitReadUser}
      >
      <h1 >Iniciar Sesión</h1>
      <span className="line"></span>
      <div className="input-group">

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeLoginForm}
          />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeLoginForm}
          />
        <br />
        <br />
        <input className="btn" type="submit" value="Iniciar sesión" />
      <br />
      <br />
      <Link to="/register">Crear cuenta</Link>
      <br />
      <br />
      {loading && <span>Cargando...</span>}
      <br />
      <br />
      {error && <span>{error.code}</span>}
          </div>
      </form>
      </div>
   </>
  );
};

export default LoginPage;