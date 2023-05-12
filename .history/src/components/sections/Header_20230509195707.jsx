import { useRef, useState } from 'react';
import { BsList, BsXCircle, BsCart } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { Link, NavLink } from 'react-router-dom';
import dragon from '../../assets/img/dragon.png';
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, setUser } = useAuth();
  const header = useRef();
  const modal = useRef();

  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? '');

  const selectTheme = (e) => {
    document.documentElement.className = e.target.value;
    localStorage.setItem('theme', e.target.value);
    setTheme(e.target.value);
  };

  const showMenu = () => {
    header.current.classList.add('header--menu');
    modal.current.classList.add('modal--show');
  };

  const hideMenu = () => {
    header.current.classList.remove('header--menu');
    modal.current.classList.remove('modal--show');
  };

  return (
    <header className="header" ref={header}>
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <img src={dragon} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
          </Link>
          <div
            className="modal modal--header"
            ref={modal}
            onClick={hideMenu}
          >
            
            <ul
              className="list list--header f-elements f-elements--responsive f-elements--center gap-md"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/dragones"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Dragones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/actores"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Actores
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mapa"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Mapa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  <BsCart></BsCart> Carrito
                </NavLink>
              </li>
              <li
                className="icon icon--close"
                onClick={hideMenu}
              >
                <BsXCircle />
              </li>
            </ul>
            

          </div>
          <div className="f-elements f-elements--center">
            <select
              className="select select--theme"
              onChange={selectTheme}
              value={theme}
            >
              <option value="system">💻</option>
              <option value="dark">🌚</option>
              <option value="light">🌞</option>
            </select>
            <button
              className="icon icon--menu"
              onClick={showMenu}
            >
              <BsList />
            </button>         
          </div>
          <div className="f-elements f-elements--center">
          
                {user ?
        <NavLink className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"} onClick={() => { setUser(false) }}>Cerrar Sesion</NavLink>
        :
        <NavLink to="/login" className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
        onClick={hideMenu}><SlLogin/>Iniciar Sesion</NavLink>
      }   
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;