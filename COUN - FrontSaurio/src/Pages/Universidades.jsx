import React from "react"
import imagen from '../assets/logo.png'
import '../css/cards.css'
import { Link } from "react-router-dom"

export const Universidades = () => {
  return (
    <>
      <div className="panel fade-in-animation">
        {/* Resto del contenido ... */}
      </div>

      <div className="centrado fade-in-animation">
        <div className="cards-container fade-in-animation">
          <div className="container">
            <div className="card card0">
              <div className="border">
                <Link to='/Istmo'><h2 className="tuniversidades">Universidad del ISTMO</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card1">
              <div className="border">
                <Link to='/SanCarlos'><h2 className="tuniversidades">Universidad de San Carlos de Guatemala</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card2">
              <div className="border">
                <Link to='/UVG'><h2 className="tuniversidades">Universidad del Valle de Guatemala</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card3">
              <div className="border">
                <Link to='/Galileo'><h2 className="tuniversidades">Universidad Galileo</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card4">
              <div className="border">
                <Link to='/UMG'><h2 className="tuniversidades">Universidad Mariano Galvez</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card5">
              <div className="border">
                <h2 className="tuniversidades">Universidad Francisco Marroquin</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card6">
              <div className="border">
                <Link to='/Rafael'><h2 className="tuniversidades">Universidad Rafael Landivar</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card7">
              <div className="border">
                <Link to='/Meso'><h2 className="tuniversidades">Universidad MesoAmericana</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card8">
              <div className="border">
                <Link to='/Pana'><h2 className="tuniversidades">Universidad Panamericana</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card9">
              <div className="border">
              <Link to='/Vinci'><h2 className="tuniversidades">Universidad Da Vinci de Guatemala</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card10">
              <div className="border">
              <Link to='/Pablo'><h2 className="tuniversidades">Universidad de San Pablo de Guatemala</h2></Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card card11">
              <div className="border">
              <Link to='/Occi'><h2 className="tuniversidades">Universidad de Occidente de Guatemala</h2></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
