import React from "react"
import imagen from '../assets/logo.png'
import '../css/cards.css'
import { Link } from "react-router-dom"



export const CARDS = () => {
    return (
        <>

            <div className="panel">
                <center>
                    <div className="cssFont_1">COUN</div>
                    <img src={imagen} className="imagen" />
                </center>
            </div>
        


            <div className="centrado">
            <div className="container">
            <div className="card card0">
                <div className="border">
                    <Link to = '/Istmo'><h2 className="tuniversidades">Universidade del ISTMO</h2></Link>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card1">
                <div className="border">
                    <h2 className="tuniversidades">Universidad de San Carlos de Guatemala</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card2">
                <div className="border">
                    <h2 className="tuniversidades">Universidad del Valle de Guatemala</h2>
                </div> 
                </div>
            </div>
            
</div>

<div className="centrado">
            <div className="container">
            <div className="card card3">
                <div className="border">
                    <h2 className="tuniversidades">Universidade Galileo</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card4">
                <div className="border">
                    <h2 className="tuniversidades">Universidad Mariano Galvez</h2>
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
            
</div>

<div className="centrado">
            <div className="container">
            <div className="card card6">
                <div className="border">
                    <h2 className="tuniversidades">Universidad Rafael landivar</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card7">
                <div className="border">
                    <h2 className="tuniversidades">Universidad Mesoamericana</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card8">
                <div className="border">
                    <h2 className="tuniversidades">Universidad Panamericana</h2>
                </div> 
                </div>
            </div>
            
</div>

<div className="centrado">
            <div className="container">
            <div className="card card9">
                <div className="border">
                    <h2 className="tuniversidades">Universidad Da Vinci de Guatemala</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card10">
                <div className="border">
                    <h2 className="tuniversidades">Universidad de San Pablo de Guatemala</h2>
                </div> 
                </div>
            </div>

            <div className="container">
            <div className="card card11">
                <div className="border">
                    <h2 className="tuniversidades">Universidad de Occidente de Guatemala</h2>
                </div> 
                </div>
            </div>
            
</div>


            

        </>
    )
}