import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from '../../components/Footer'

export const UMG = () => {
    const MAX_STARS = 10;

    const [rating, setRating] = useState(0);

    function abrirEnNuevaPestana(urls) {
        urls.forEach((url) => {
            window.open(url, "_blank");
        });
    }

    // Llamada a la función con un array de URLs
    const urls = [
        "https://www.galileo.edu/fisicc/",
        "https://www.galileo.edu/facti/",
        "https://www.galileo.edu/faced/",
        "https://www.galileo.edu/facom/",
        "https://www.galileo.edu/factede/",
        "https://www.galileo.edu/fabiq/",
        "https://www.galileo.edu/ficon/",
        "https://www.galileo.edu/facisa/",
        "https://www.galileo.edu/facultad-de-administracion/"
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

                <img src="https://umg.edu.gt/assets/umg.png" alt="" width={'300vw'} height={'300vh'} />

                <div className="TitulosU">
                    <h1 class="cssFont_2" >UNIVERSIDAD MARIANO GALVEZ</h1>
                    <p className="cssFont_3" >La Verdad es tu fértil herencia Libertad, es tu lema inmortal.</p>
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
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Arquitectura</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Arquitectura de la Universidad Mariano Gálvez de Guatemala ofrece programas de Arquitectura, 
                            Moda y Diseño. Dentro de la Arquitectura, hay una especialización en Interiores. La facultad tiene un perfil profesional, un pensum de estudios y 
                            un calendario académico en su sitio web.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias de la Administración</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias de la Administración es una de las facultades de la Universidad Mariano Gálvez de Guatemala. 
                            Ofrece programas de licenciatura y posgrado en áreas como Administración de Empresas, Administración Pública, Mercadotecnia y Publicidad.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[1])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias de la Comunicación</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias de la Comunicación de la Universidad Mariano Gálvez de Guatemala 
                            es una escuela que ofrece programas de comunicación, periodismo y ciencias de la información. Algunas de las carreras que 
                            se pueden estudiar son: Licenciatura en Ciencias de la Comunicación con Énfasis en Publicidad, Profesorado en Ciencias de la 
                            Comunicación y Maestría en Comunicación Estratégica. </p>
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
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias de la Económicas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Económicas es una de las 13 facultades que tiene la Universidad Mariano 
                            Gálvez de Guatemala. Su objetivo es formar profesionales en las ciencias económicas, que son de gran importancia para el desarrollo de una empresa. 
                            Ofrece carreras de pregrado y posgrado en áreas como economía, contaduría, auditoría y comercio internacional.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Jurídicas y Sociales</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Jurídicas y Sociales es una de las 13 facultades de la Universidad Mariano Gálvez de Guatemala. 
                            Ofrece programas de estudio en áreas como Derecho y Leyes, Seguridad, Criminología y Estudios Forenses.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Médicas y de la Salud</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Médicas y de la Salud de la Universidad Mariano Gálvez de Guatemala es una institución que ofrece 
                            programas de formación profesional en el área de la salud, como Medicina y Cirugía, Enfermería, Nutrición y Fisioterapia. Su misión es el desarrollo 
                            integral de profesionales de la salud con competencias éticas, científicas, tecnológicas y humanitarias.</p>
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
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias Quimícas y Biológicas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ciencias Químicas y Biológicas de la Universidad Mariano Gálvez de Guatemala ofrece la carrera de Licenciatura en 
                            Química Biológica, entre otras. Puedes encontrar más información sobre la facultad, sus programas, requisitos y contacto en su página web.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[6])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Humanidades</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Humanidades de la Universidad Mariano Gálvez de Guatemala es una unidad académica que ofrece programas de educación, 
                            ciencias sociales, comunicación y administración. Su misión es formar profesionales competentes, éticamente responsables y socialmente abiertos al cambio.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[7])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ingeniería Matemática y Ciencias Físicas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Somos una entidad académica de Universidad Galileo, dedicada a la formación de Administradores de Empresas y Mercadólogos. Los programas de la Facultad son apoyados con diplomados y certificaciones incluidas dentro del pensum de
                                estudio para generar un desarrollo integral y actualización continua de nuestros estudiantes.</p>
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
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ingeniería en Sistemas</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Fue creada y diseñada para formar profesionales en las áreas técnicas, operativas y administrativas, con visión hacia la mejora empresarial mediante la valoración de la calidad, eficiencia y efectividad y actualización
                                tecnológica, del ramo de la construcción.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[9])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Odontología</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Se creó en el año 2002 con una nueva visión de crear carreras que den alternativas con excelencia académica y desarrollo humano de profesionales que intervengan de manera integral en la salud de la población usuaria de
                                los servicios de salud públicos o privados.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[10])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Psicología</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Somos una entidad académica de Universidad Galileo, dedicada a la formación de Administradores de Empresas y Mercadólogos. Los programas de la Facultad son apoyados con diplomados y certificaciones incluidas dentro del pensum de
                                estudio para generar un desarrollo integral y actualización continua de nuestros estudiantes.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[11])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="container3mil fade-in-animation">
                <div class="Facultades">
                    <img src="https://umg.edu.gt/assets/umg.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Teología</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Fue creada y diseñada para formar profesionales en las áreas técnicas, operativas y administrativas, con visión hacia la mejora empresarial mediante la valoración de la calidad, eficiencia y efectividad y actualización
                                tecnológica, del ramo de la construcción.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[12])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="container-bar fade-in-animation">
                <input type="checkbox" id="btn-social" />
                <label for="btn-social" class="fa fa-play"></label>
                <div class="icon-social">
                    <a href="https://umg.edu.gt/" target="_blank" rel="noopener noreferrer">
                        <img src="https://umg.edu.gt/assets/umg.png" alt="" class="social-logo" />
                    </a>
                    <a href="https://www.facebook.com/u.marianogalvez" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"></a>
                </div>
            </div>
        </>
    )
}