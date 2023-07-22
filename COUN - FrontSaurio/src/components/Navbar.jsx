import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../index';
import logo from '../assets/logo.png';

export const NavBar = () => {
    const { dataUser, LoggedIn } = useContext(AuthContext)
    const _id = dataUser.sub

    const logOut = () => {
        localStorage.clear()

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark " style={{background: "#43523a"}}>
            <div className="container-fluid">
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <a className="navbar-brand" href="#">
                <img src={logo} width="70" height="70" alt=""/>
            </a>
            <a className="navbar-brand" ><h1>COUN</h1></a>&nbsp;
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                <h3>Home</h3>
                                
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/universidades' className="nav-link">
                                <h3> Universidades</h3>
                               
                            </Link>
                        </li>

                        {
                            dataUser.role == 'ADMIN' ? (
                                <>
                                    <li>
                                        <Link to='/Users' className="nav-link">
                                            Users
                                        </Link>
                                    </li>
                                   
                                </>
                            ) : <></>
                        }

                    </ul>

                        <ul className=' navbar-nav  mb-lg-0 justify-content-end'>

                        {
                          LoggedIn? (
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Welcome {dataUser.name}, {dataUser.role}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/" className="nav-link text-dark" onClick={() => logOut()}>
                                   <h3> LogOut</h3> 
                                </Link>
                            </ul>
                            </li>
                          ):<li className="nav-item">
                            <Link  to="/" className="nav-link">
                            <h3> LogIn</h3></Link>
                            
                          </li>
                        }
                        </ul>

                       

                        
                    
                    
                </div>
            </div>
        </nav>

    )
}

export default NavBar;

