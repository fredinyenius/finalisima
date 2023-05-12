import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const navigate = useNavigate();

  const { loading, error, user, createUser } = useAuth();

  const [registrationForm, setRegistrationForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = registrationForm;

  const handleChangeRegistrationForm = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    await createUser(email, password);
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

      <form className="form"
        onSubmit={handleSubmitCreateUser}
        >
        <h1>RegisterPage</h1>
        <br />
        <br />
        <span className="line"></span>

        <br />
        <br />
        <br />
        <br />
        <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeRegistrationForm}
          />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeRegistrationForm}
          />
        <br />
        <input className="btn" type="submit" value="Registrar" />
      <Link to="/login">Iniciar sesión</Link>
      {loading && <span>Cargando...</span>}
      {error && <span>{error.code}</span>}
        </div>
      </form>
    </div>
      
    </>
  );
};

export default RegisterPage;