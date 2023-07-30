import React from "react"
import imagen from '../assets/logo.png'
import '../css/cards.css'
import { Link } from "react-router-dom"

export const Universidades = () => {
  return (
    <>

      <div className="body4mil fade-in-animation">
        <center> <h1 style={{ color: "#363753", paddingTop:'30px', paddingBottom: '10px'}} >Universidades</h1></center>
      </div>

      <div className="centrado fade-in-animation">

        <div className="cards-container fade-in-animation">

          <div className="container">
            <div className="card card0">
              <Link to='/Istmo'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad del ISTMO</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card1">
              <Link to='/SanCarlos'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad de San Carlos de Guatemala</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card2">
              <Link to='/UVG'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad del Valle de Guatemala</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card3">
              <Link to='/Galileo'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad Galileo</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card4">
              <Link to='/UMG'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad Mariano Galvez</h2>
                </div>
              </Link>
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
              <Link to='/Rafael'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad Rafael Landivar</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card7">
              <Link to='/Meso'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad MesoAmericana</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card8">
              <Link to='/Pana'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad Panamericana</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card9">
              <Link to='/Vinci'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad Da Vinci de Guatemala</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card10">
              <Link to='/Pablo'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad de San Pablo de Guatemala</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="container">
            <div className="card card11">
              <Link to='/Occi'>
                <div className="border">
                  <h2 className="tuniversidades">Universidad de Occidente de Guatemala</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
