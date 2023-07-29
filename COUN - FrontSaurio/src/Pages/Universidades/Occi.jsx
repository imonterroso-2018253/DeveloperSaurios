import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from '../../components/Footer'

export const Occi = () => {
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

                <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="" width={'300vw'} height={'300vh'} />

                <div className="TitulosUSAC">
                    <h1 class="cssFont_2" >UNIVERSIDAD OCCIDENTAL DE GUATEMALA</h1>
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
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">ARQUITECTURA</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El objetivo de esta carrera es formar arquitectos profesionales capaces de analizar, planificar, diseñar, dirigir y supervisar obras de construcción, tanto públicas como privadas, brindándoles las herramientas y el conocimiento suficiente para desempeñar la labor con excelencia.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">HUMANIDADES</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Los aspirantes a las carreras orientadas a la educación, son personas que se caracterizan por tener un alto compromiso con el trabajo social y pedagógico. Esta, como todas las carreras educativas, te llevará a exigirte y a demostrar tus capacidades de la mejor manera en la gestión y el control de la enseñanza.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[1])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">FACULTAD DE CIENCIAS JURÍDICAS Y SOCIALES</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Prepara profesionales con alto nivel académico, formación integral, científica, técnica y social humanística, en las áreas de conocimiento de: Economía, Contaduría Pública y Auditoría, Administración de Empresas.</p>
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
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">INGENIERÍA</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El objetivo de esta carrera es preparar a profesionales competitivos, capaces de aplicar nuevas tecnologías computacionales, desarrollar softwares para solucionar problemas informáticos y disminuir la vulnerabilidad de sistemas, con métodos, modelos y estándares de calidad.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">DERECHO</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Esta es una carrera de mucha transcendencia. La abogacía es una profesión que debe mantenerse al día de los diversos cambios legislativos que afectan a sus áreas de trabajo para desempeñar su labor con diligencia y efectividad.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">CIENCIAS ECONÓMICAS</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Esta es una carrera de mucha transcendencia. La abogacía es una profesión que debe mantenerse al día de los diversos cambios legislativos que afectan a sus áreas de trabajo para desempeñar su labor con diligencia y efectividad.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

              </div>
              <div class="container3mil fade-in-animation">

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">CIENCIAS DE LA SALUD</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Los aspirantes a esta carrera, se caracterizan por ser personas respetuosas, comunicativas, empáticas y con un gran sentido humano, capaces de sobrellevar situaciones estresantes por el bien del prójimo.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://losabogadosenguatemala.com/wp-content/uploads/2022/01/LOGO-UNIVERSIDAD-DE-OCCIDENTE-2022.png" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">ODONTOLOGÍA</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">El modelo educativo de la facultad de Odontología se entremezcla en un modelo tradicional de enseñanza y uno creciente por competencias. En este último se busca que la enseñanza se centralice en el estudiante, pretendiendo como fin último un aprendizaje significativo, mediante la individualización y la estimulación de la creatividad en la construcción de su propio conocimiento.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
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