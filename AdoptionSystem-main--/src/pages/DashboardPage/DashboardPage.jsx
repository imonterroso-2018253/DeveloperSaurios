import React, { useState } from 'react'
import './DashboardStyle.css'
import { AnimalsPage } from '../AnimalsPage';
import { AddAnimal } from '../AddAnimal';
import { AppointmentPage } from '../AppointmentPage';
import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Index';
import { useNavigate } from 'react-router-dom'; 

export const DashboardPage = () => {
    const navigate = useNavigate()
    const {dataUser} = useContext(AuthContext)
    const isAdmin = false;
    const [showUser, setShowUser] = useState(true)
    const [showAppointment, setShowAppointment] = useState(false)
    const [showAnimals, setShowAnimals] = useState(false)

    const logOut = ()=>{
        //dos formas de limpiar el LocalStorage
        //Limpiarlo todo:
        localStorage.clear()
        navigate('/')
        //Limpiar solo uno o varios datos
        //localStorage.removeItem('token')
    }

  return (
    <>
        <div id='id'>
            <section id='sidebar'>
                <a className='brand ms-3'>
                    <span className='text'>Adoption System</span>
                </a>
                <ul className='side-menu top'>
                    <li className='active'>
                        <button>
                            <span className='text'>Control panel</span>
                        </button>
                    </li>
                    <li>
                        <Link to='animals'>
                            <button >
                                <span className='text'>ANIMALS</span>
                            </button>
                        </Link>
                    </li>
                    {
                        dataUser.role == 'ADMIN' ? (
                            <li>
                                <Link to='users'>
                                    <button>
                                        <span className="text">USERS</span>
                                    </button>
                                </Link>
                            </li>
                        ) : <></>
                    }
                    <li>
                        <Link to='appointments'>
                            <button>
                                <span className="text">APPOINTMENTS</span>
                            </button>
                        </Link>
                    </li>
                </ul>
                <ul className='side-menu top'>
                    <li>
                        <button>
                            <span className="text">Welcome {dataUser.name}, {dataUser.role}</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className='text'>Settings</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> logOut()}>
                            <span className='text'>LogOut</span>
                        </button>
                    </li>
                </ul>
            </section>
            <section id='content'>
                <nav>
                    <a className='profile'></a>
                </nav>
                <Outlet></Outlet>
                {/* 
                    isAdmin ? (
                        <main>
                            <div className='head-title'>
                                <div className='left'>
                                    <h1>
                                        Control panel Admin
                                    </h1>
                                </div>
                            </div>
                            <ul className='box-info'>
                                <li>
                                    <span className='text'>
                                        <h3>USER</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>ANIMALS</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>APPOINTMENT</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>REGISTER USER</h3>
                                    </span>
                                </li>
                            </ul>
                        </main>
                    ) : (
                        <div>
                            {
                                showUser ? (
                                    <>
                                        <main>
                                            <div className='left binding color'>
                                                <h1>Control Users</h1>
                                            </div>
                                            <hr />
                                            <AddAnimal></AddAnimal>
                                        </main>
                                    </>
                                ) : showAnimals ? (
                                    <>
                                        <main>
                                            <div className="left binding color">
                                                <h1>Control Animals</h1>
                                            </div>
                                            <hr />
                                            <AnimalsPage></AnimalsPage>
                                        </main>
                                    </>
                                ) : (
                                    <>
                                    <main>
                                        <div className="left binding color">
                                            <h1>Control appointments</h1>
                                        </div>
                                        <hr />
                                        <AppointmentPage></AppointmentPage>
                                    </main>
                                    </>
                                )
                            }
                            
                        </div>
                    ) */
                }
            </section>
        </div>
    </>
  )
}