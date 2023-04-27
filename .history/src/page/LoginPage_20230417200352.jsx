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
    <div>
    <h1>Login Here</h1>
    <form
    onSubmit={handleSubmitReadUser}>
      <!-- USERNAME INPUT -->
      <label for="username">Username</label>
      <input type="text" placeholder="Enter Username">
      <!-- PASSWORD INPUT -->
      <label for="password">Password</label>
      <input type="password" placeholder="Enter Password">
      <input type="submit" value="Log In">
      <a href="#">Lost your Password?</a><br>
      <a href="#">Don't have An account?</a>
    </form>
  </div>
</>



    



  );
};

export default LoginPage;