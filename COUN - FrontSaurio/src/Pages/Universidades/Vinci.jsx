import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from '../../components/Footer'

export const Vinci = () => {
    const MAX_STARS = 10;

    const [rating, setRating] = useState(0);

    function abrirEnNuevaPestana(urls) {
        urls.forEach((url) => {
            window.open(url, "_blank");
        });
    }

    // Llamada a la función con un array de URLs
    const urls = [
        "https://farusac.edu.gt/",
        "http://fausac.gt/",
        "http://economicas.usac.edu.gt/",
        "https://derecho.cloud/",
        "https://medicina.usac.edu.gt/",
        "https://portal.ccqqfar.usac.edu.gt./",
        "http://humanidades.usac.edu.gt/portal/",
        "https://portal.ingenieria.usac.edu.gt/",
        "https://odontologia.usac.edu.gt/",
        "http://portal.fmvz.usac.edu.gt/"
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

                <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="" width={'300vw'} height={'300vh'} />

                <div className="TitulosUSAC">
                    <h1 class="cssFont_2" >UNIVERSIDAD DA VINCI DE GUATEMALA</h1>
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

            <div className="body4mil fade-in-animation">
                <center> <h1 class="cssFont_2" >FACULTADES</h1></center>
            </div>

            <br />

            <div class="container3mil fade-in-animation">

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Criminológicas, Criminalísticas y de Seguridad</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Caracterizada por ser una Facultad que desarrolla actividades de enseñanza aprendizaje, investigación y extensión, orientadas a la búsqueda de solución de problemas en las áreas de su especialidad.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Enfermería y Ciencias del Cuidado de la Salud</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Universidad Da Vinci de Guatemala ha diseñado la carrera de Técnico Universitario en Enfermería dirigida a egresados de educación media que deseen formarse y adquirir conocimientos para desempeñarse profesionalmente en el campo de la enfermería.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[1])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Humanidades</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Las Ciencias Sociales y Humanidades se encargan del estudio del ser humano como ente social, dando gran énfasis a aspectos como el comportamiento, interacciones humanas y la cultura.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[2])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div>

            <br />

            <div class="container3mil fade-in-animation">

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Jurídicas y Sociales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Ofrece programas de estudio en el campo del derecho, como la Licenciatura en Ciencias Jurídicas y Sociales, Abogado y Notario. También realiza actividades de investigación, extensión y servicio social.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Odontológicas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El título de Cirujano Dentista de la Facultad de Ciencias Odontológicas conlleva un programa académico, en el cual se forman profesionales capaces de abordar con criterio y habilidad técnica la prevención, el diagnóstico, el pronóstico, así como el tratamiento y rehabilitación de enfermedades y situaciones clínicas estomatológicas, con alta calidad, precisión y estética.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Químicas y Farmacia</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Es una unidad académica de la Universidad de San Carlos de Guatemala que ofrece carreras relacionadas con la química y la farmacia.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[5])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div>

            <br />

            <div class="container3mil fade-in-animation">

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Jurídicas, Sociales y Relaciones Internacionales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Licenciatura en Ciencias Jurídicas y Sociales tiene como objetivo general formar juristas con excelencia académica, capaces de ejercer la abogacía y el notariado aplicando de manera objetiva y efectiva los postulados deontológicos y derechos fundamentales.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[6])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Inginiería</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El egresado de la Carrera de Ingeniería de Sistemas de la Universidad Da Vinci de Guatemala, es un profesional capaz de analizar, diseñar, desarrollar sistemas y gestionar proyectos, que involucran personas, procesos e información, para automatizaciones mediante diseño, programación, mantenimiento e innovación de sistemas de información y de redes, aplicando las tecnologías de la información.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[7])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Médicas y de la Vida</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Médicas y de la vida se propone formar Recurso Humanos en Deportes, a través de un programa modular de dos y cuatro años, en tres áreas: Área de Formación Básica, Área de Formación Específica y Área de Formación Profesional. Integradas por las líneas curriculares de Investigación, Metabolismo Biomecánica Nutrición Salud y Principios y Valores.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[8])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div>

            <br />

            <div class="container3mil fade-in-animation">

            <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Música y Artes Visuales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El grado académico de TÉCNICO UNIVERSITARIO consta de dos años de estudios (4 semestres) que abarcan el desarrollo de habilidades y adquisición de conocimiento a nivel técnico  en  áreas  de la producción de música y sonido digital.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[9])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Administrativas y Comerciales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La globalización de los mercados sustentados en la apertura comercial representa actualmente grandes oportunidades de negocios para las personas físicas y jurídicas.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[9])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://udv.edu.gt/wp-content/uploads/2018/07/favicon.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Agronómicas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Agronómicas ofrece la carrera de Ingeniería Agronómica, enfocada en profesionales con alto nivel académico en producción agrícola. Formamos graduados competitivos con habilidades empresariales y administrativas para satisfacer las demandas del sector productivo y académico.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[9])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div>
            

            <br />

            <div class="container-bar fade-in-animation">
                <input type="checkbox" id="btn-social" />
                <label for="btn-social" class="fa fa-play"></label>
                <div class="icon-social">
                    <a href="https://www.usac.edu.gt/index.php" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.usac.edu.gt/img/logo_usac2018.svg" alt="" />
                    </a>
                    <a href="https://www.facebook.com/UsacOficial" target="_blank" rel="noopener noreferrer" class="fa fa-facebook">
                    </a>
                </div>
            </div>
        </>
    )
}