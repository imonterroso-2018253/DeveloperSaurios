import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { AuthContext } from "../../index";

export const Galileo = () => {
  const MAX_STARS = 10;
  const { name } = useParams();
  const [university, setUniversity] = useState(null);
  const [universityId, setUniversityId] = useState(null);
  const [rating, setRating] = useState(0);
  const [calificarInicial, setCalificarInicial] = useState(true);
  const [calificando, setCalificando] = useState(false);
  const { dataUser } = useContext(AuthContext);

  const getUniversity = async () => {
    try {
      const { data } = await axios(`https://coun-back-saurio.vercel.app/university/getByName/${name}`);
      setUniversity(data);
      setUniversityId(data.university._id);
      setRating(data.averageRating);
    } catch (err) {
      console.log(err);
    }
  };

  function abrirEnNuevaPestana(urls) {
    urls.forEach((url) => {
      window.open(url, "_blank");
    });
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  useEffect(() => {
    getUniversity();
  }, [name]);

  const handleCalificarClick = () => {
    if(calificando == false){
      setCalificando(true);
    }else{
      setCalificando(false);
    }
    
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const addVote = async (universityId, userId, rating) => {
    try {
      const response = await axios.post("https://coun-back-saurio.vercel.app/university/vote", {
        universityId,
        userId,
        stars: rating,
      }, {headers});
      getUniversity();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddVote = () => {
    addVote(universityId, dataUser.sub, rating);
    setCalificando(false);
  };

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
                <Link to="/Universidades"><button className="btnRegresar"><i class="fa-solid fa-arrow-left"></i></button></Link>
            </div>

            <div className="UsacContainer fade-in-animation">

                <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="" width={'300vw'} height={'300vh'} />

                <div className="TitulosU">
                    <h1 class="cssFont_2" >UNIVERSIDAD GALILEO</h1>
                    <p className="cssFont_3" >Educar es cambiar visiones y transformar vidas</p>
                    <p className="cssFont_4">Mensualidad: Ronda de Q2700 a Q3500 dependiendo la carrera</p>
                    <div>
                    {calificando ? ( // Mostrar estrellas solo cuando se está calificando
                    <>
                        <StarRating
                        rating={rating}
                        maxStars={MAX_STARS}
                        readOnly={!calificando}
                        onChangeRating={handleRatingChange}
                        />
                        <p>Valoración: {rating} de {MAX_STARS}</p>
                        <button className="btn0" onClick={handleAddVote}>
                        Enviar Calificación
                        </button>
                        <button className="btn0" onClick={handleCalificarClick}>
                        Cancelar
                        </button>
                    </>
                    ) : (
                    <>
                        <StarRating
                        rating={rating}
                        maxStars={MAX_STARS}
                        readOnly={!calificando}
                        onChangeRating={handleRatingChange}
                        /><p>Valoración: {rating} de {MAX_STARS}</p>
                        <button className="btn0" onClick={handleCalificarClick}>
                        Calificar
                        </button>
                    </>
                    )}


                    
                        &nbsp;
                        <Link to={`/Comentarios/${universityId}`}> 
                        <button className="btn0">Comentarios</button>
                        </Link>

                    </div>

                </div>
            </div>

            <div className="body4mil fade-in-animation">
                <center> <h1 class="cssFont_2" >FACULTADES</h1></center>
            </div>

            <br />

            <div className="container3mil fade-in-animation">
                <div className="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p className="containerTitle">Facultad de Ciencias de la Computación.</p>
                    </center>
                    <div className="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La Facultad de Ingeniería de Sistemas, Informática y Ciencias de la Computación, FISICC, es la entidad donde se establecieron
                                las bases que dieron origen a Universidad Galileo. Su experiencia académica, catedráticos y la actualización constante del contenido de los cursos y del equipo de
                                los laboratorios, le ha permitido mantenerse a la vanguardia de la tecnología de punta.</p>
                        </div>
                        <div className="btn-container">
                            <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div className="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p className="containerTitle">Facultad de Educación</p>
                    </center>
                    <div className="card_content3mil">
                        <div className="containerText">
                            <p className="containerParr">A través de esta unidad académica se capacita y forma a docentes, planificadores, psicopedagogos y administradores educativos, dentro de un ambiente que propicia la permanente búsqueda
                                de excelencia académica que contribuya al crecimiento humano y desarrollo del país. </p>
                        </div>
                        <div className="btn-container">
                            <button onClick={() => handleClick(urls[2])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div className="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p className="containerTitle">Facultad de Ciencia, Tecnología e Industria</p>
                    </center>
                    <div className="card_content3mil">
                        <div className="containerText">
                            <p className="containerParr">Basa su proceso de aprendizaje en el desarrollo de competencias necesarias para concebir conceptos de desarrollo en el área de negocios, productos y sistemas
                                de fabricación, y prestación de servicios. Simultáneamente se fomenta la creatividad, a través de actividades con profesionales y empresarios nacionales e internacionales, con los que se intercambia conocimiento y
                                experiencias. Incluye aspectos relacionados con el análisis, la planeación, el control, la calidad, el diseño de productos y otros aspectos de la manufactura de clase mundial.</p>
                        </div>
                        <div className="btn-container">
                            <button onClick={() => handleClick(urls[1])} className="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

            </div >

            <br />

            <div class="container3mil fade-in-animation">
                <div class="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias de la Comunicación</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">En la Facultad de Ciencias de la Comunicación se forman profesionales en la comunicación y el diseño preparados para la investigación, elaboración, producción y distribución de materiales gráficos,
                                audiovisuales y digitales que incluyen los factores de movimiento, tiempo y espacio virtual, que rompen y mejoran los espacios tradicionalmente utilizados para la comunicación.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[3])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencia y Tecnología del Deporte</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">La facultad de Ciencias y Tecnología del Deporte fue creada con la finalidad de brindar una adecuada capacitación a los profesionales que se desempeñan dentro del área del deporte. Su visión es convertirse en
                                líder a nivel latinoamericano en desarrollar y promover la cultura de profesionalización y la superación de especialistas deportivos de alto rendimiento, para ubicar a Guatemala en un estatus de excelencia internacional.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[4])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Biología, Química y Farmacia</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Es la responsable de la formación de profesionales capaces de actuar como factores dinámicos, con sentido creativo, crítico, participativo y gerencial dentro de empresas relacionadas con las áreas de biología,
                                química, farmacia, y otras concernientes directa e indirectamente a la salud y el ambiente, desde el punto de vista del impacto económico.</p>
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
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ingeniería de la Construcción</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Fue creada y diseñada para formar profesionales en las áreas técnicas, operativas y administrativas, con visión hacia la mejora empresarial mediante la valoración de la calidad, eficiencia y efectividad y actualización
                                tecnológica, del ramo de la construcción.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[6])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Ciencias de la Salud</p>
                    </center>
                    <div class="card_content3mil">
                        <div class="containerText">
                            <p class="containerParr">Se creó en el año 2002 con una nueva visión de crear carreras que den alternativas con excelencia académica y desarrollo humano de profesionales que intervengan de manera integral en la salud de la población usuaria de
                                los servicios de salud públicos o privados.</p>
                        </div>
                        <div class="btn-container">
                            <button onClick={() => handleClick(urls[7])} class="btn draw-border">Información</button>
                        </div>
                    </div>
                </div>

                <div class="Facultades">
                    <img src="https://www.cig.org.gt/assets/img/icons/logo%20Universidad%20Galileo.jpg" alt="Person" class="FacultadIMG" />
                    <br />
                    <center>
                        <p class="containerTitle">Facultad de Administración</p>
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

            <div class="container-bar fade-in-animation">
                <input type="checkbox" id="btn-social" />
                <label for="btn-social" class="fa fa-play"></label>
                <div class="icon-social">
                    <a href="https://www.galileo.edu/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.galileo.edu/wp-content/themes/galileo-theme/img/logo-header.png" alt="" class="social-logo" />
                    </a>
                    <a href="https://www.facebook.com/ugalileo" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"></a>
                </div>
            </div>
        </>
    )
}