import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from '../../components/Footer'

export const UVG = () => {
    const MAX_STARS = 10;

    const [rating, setRating] = useState(0);

    function abrirEnNuevaPestana(urls) {
        urls.forEach((url) => {
            window.open(url, "_blank");
        });
    }

    // Llamada a la función con un array de URLs
    const urls = [
        "https://www.uvg.edu.gt/facultades/ingenieria/",
        "https://www.uvg.edu.gt/facultades/ciencias-sociales/",
        "https://www.uvg.edu.gt/facultades/ciencias-y-humanidades/",
        "https://www.uvg.edu.gt/facultades/educacion/"
    ];

    // Función para abrir en nueva pestaña al hacer clic en un botón
    const handleClick = (url) => {
        abrirEnNuevaPestana([url]);
    };

    const handleStarClick = (index, isHalf) => {
        setRating(index + (isHalf ? 0.5 : 1));
    };

    return (
        <>
            <div className="containerRegresar">
                <Link to="/Universidades"><button className="btnRegresar">Regresar</button></Link>
            </div>

            <div className="UsacContainer fade-in-animation">

                <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="" width={'300vw'} height={'300vh'} />

                <div className="TitulosUSAC">
                    <h1 class="cssFont_2" >UNIVERSIDAD DEL VALLE DE GUATEMALA</h1>
                    <p className="cssFont_3" >Excelencia que trasciende</p>
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
                        <Link to={'/Comentarios'}><button class="btn0"> Comentarios
                        </button></Link>
                        &nbsp; &nbsp;<button class="btn0"> Calificar
                        </button>
                    </div>

                </div>
            </div>

            <div className="body4mil fade-in-animation">
                <center> <h1 class="cssFont_2" >FACULTADES</h1></center>
            </div>

            <br />

            <div class="container3mil fade-in-animation">

                <div class="Facultades">
                    <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Sociales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">En la Facultad de Ciencias Sociales creemos que un mundo mejor es posible. Consideramos que, a través de la investigación, la intervención clínica, la docencia y la extensión, podemos aportar datos,
                                formar opiniones y definir proyectos, programas y políticas que: 1) Inciden en la creación de sociedades más justas, equitativas y pacíficas, 2) Procuran la salud mental integral para todos y todas, 3) Contribuyen a la conservación e
                                interpretación de nuestro patrimonio arqueológico e histórico.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[1])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>
                
                <div class="Facultades">
                    <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ingeniería</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ingeniería ofrece al mundo ingenieros que comprenden el mundo con las ciencias y  aplican el conocimiento científico, innovando y resolviendo problemas con la ingeniería.
                                Los ingenieros contribuimos impactando de forma positiva en nuestra sociedad. Creamos nuevos productos, desarrollamos nuevas tecnologías, innovamos procesos y emprendemos negocios que cambian nuestras vidas.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias y Humanidades</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Formamos ciudadanos con conocimientos en las distintas áreas básicas de las ciencias y humanidades, capaces de establecer una relación crítica y comprometida con la realidad circundante.  Asimismo, promovemos
                                la adquisición de habilidades y destrezas que les permitan diagnosticar y transformar el contexto complejo que los rodea.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[2])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div >

            <br />

            <div class="container3mil fade-in-animation">

                
                <div class="Facultades">
                    <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Educación</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Educación fue creada en 1968 y tiene como principal objetivo impactar la calidad educativa de Guatemala, profesionalizando maestros en servicio y ofreciendo especializaciones en el campo educativo.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div>

            <br />

            <div class="container-bar fade-in-animation">
                <input type="checkbox" id="btn-social" />
                <label for="btn-social" class="fa fa-play"></label>
                <div class="icon-social">
                    <a href="https://www.uvg.edu.gt/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.universidadesonline.com.gt/logos/original/logo-universidad-del-valle-de-guatemala.png" alt="" class="social-logo" />
                    </a>
                    <a href="https://www.facebook.com/universidaddelvallegt" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"></a>
                </div>
            </div>
        </>
    )
}