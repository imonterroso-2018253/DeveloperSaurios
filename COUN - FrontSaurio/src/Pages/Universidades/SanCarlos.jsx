import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from '../../components/Footer'

export const SanCarlos = () => {
    const MAX_STARS = 10;

    const [rating, setRating] = useState(0);

    const handleStarClick = (index, isHalf) => {
        setRating(index + (isHalf ? 0.5 : 1));
    };

    return (
        <>
                <div className="UsacContainer">

                    <img src="https://www.usac.edu.gt/g/escudo10.png" alt="" width={'300vw'} height={'300vh'} />

                    <div className="TitulosUSAC">
                        <h1 class="cssFont_2" >UNIVERSIDAD SAN CARLOS DE GUATEMALA</h1>
                        <p className="cssFont_3" >Promoviendo la eduación superior autónoma, pública y gratuita</p>
                        <div className="App">
                            <div className="App">
                                <div className="star-rating">
                                    {[...Array(MAX_STARS)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index + 1 <= rating ? 'filled' : ''} ${index + 0.5 === rating ? 'half-filled' : ''}`}
                                            onClick={() => handleStarClick(index, false)}
                                            onMouseEnter={() => handleStarClick(index, false)}
                                            onMouseLeave={() => handleStarClick(Math.floor(rating) - 1, false)}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <p>Valoración: {rating} de {MAX_STARS}</p>
                            </div>
                        </div>

                        <div>
                            <Link to={'/Comentarios'}><button class="btn0"> Comentar
                            </button></Link>
                            &nbsp; &nbsp;<button class="btn0"> Calificar
                            </button>
                        </div>

                    </div>
                </div>

                <div class="container3mil">
                    <div class="Facultades">
                        <img src="http://fausac.gt/wp-content/uploads/2021/02/memoria-1.png" alt="Person" class="FacultadIMG" />
                        <br />
                        <center>
                            <p class="containerTitle">Facultad de Agronomía</p>
                        </center>
                        <div class="containerText">
                            <p className="containerParr" >Se ha caracterizado por ser una Unidad Académica que va a la vanguardia educativa en el ámbito de nuestra tricentenaria Universidad de San Carlos de Guatemala.</p>
                        </div>
                        <button class="btn draw-border">Comentarios</button>
                    </div>

                    <div class="Facultades">
                        <img src="https://unis.edu.gt/wp-content/uploads/2023/02/IMG_1150-4-scaled.jpg" alt="Person" class="FacultadIMG" />
                        <br />
                        <center>
                            <p class="containerTitle">Facultad de Arquitectura</p>
                        </center>
                        <div class="containerText">
                            <p className="containerParr" >Caracterizada por ser una Facultad que desarrolla actividades de enseñanza aprendizaje, investigación y extensión, orientadas a la búsqueda de solución de problemas en las áreas de su especialidad. </p>
                        </div>
                        <button class="btn draw-border">Comentarios</button>
                    </div>

                    <div class="Facultades">
                        <img src="https://unis.edu.gt/wp-content/uploads/2023/02/2021-PER-Radio-1-1-scaled-e1676652470156.jpg" alt="Person" class="FacultadIMG" />
                        <br />
                        <center>
                            <p class="containerTitle">Facultad de Comunicación</p>
                        </center>
                        <div class="grid-container">
                            <br /><br />
                        </div>
                        <button class="btn draw-border">Comentarios</button>
                    </div>
                </div>            
        </>
    )
}