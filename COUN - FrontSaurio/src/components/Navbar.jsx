import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../index';
import logo from '../assets/logo.png';
import '../../src/CSS/Navbar.css';

const NavBar = () => {
  const { dataUser, LoggedIn } = useContext(AuthContext);
  const _id = dataUser.sub;

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="70" height="70" alt="" />
          <h1>COUN</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h3>Inicio</h3>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Universidades" className="nav-link">
                <h3>Universidades</h3>
              </Link>
            </li>

            {dataUser.role === 'ADMIN' && (
              <li className="nav-item">
                <Link to="/Users" className="nav-link">
                  <h3>Usuarios</h3>
                </Link>
              </li>
            )}
            
          </ul>

          <ul className="navbar-nav mb-lg-0">
            {LoggedIn ? (
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Welcome {dataUser.name}, {dataUser.role}
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/" className="nav-link text-dark" onClick={() => logOut()}>
                      <h3>LogOut</h3>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  <h3>LogIn</h3>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
