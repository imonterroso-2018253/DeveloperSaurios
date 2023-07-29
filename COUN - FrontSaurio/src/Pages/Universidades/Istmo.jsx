import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"

export const Istmo = () => {
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

        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt="" width={'300vw'} height={'300vh'} />

        <div className="TitulosUSAC">
          <h1 class="cssFont_2" >UNIVERSIDAD DEL ISTMO</h1>
          <p className="cssFont_3" >Saber para servir</p>
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

      <div class="container3mil fade-in-animation">

        <div class="Facultades">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt="Person" class="FacultadIMG" />
          <center>
            <p class="containerTitle">Facultad de Arquitectura y Diseño</p>
          </center>
          <div class="card_content3mil">
            <div class="containerText">
              <p class="containerParr">En la Facultad de Ciencias Sociales creemos que un mundo mejor es posible. Consideramos que, a través de la investigación, la intervención clínica, la docencia y la extensión, podemos aportar datos,
                formar opiniones y definir proyectos, programas y políticas que: 1) Inciden en la creación de sociedades más justas, equitativas y pacíficas, 2) Procuran la salud mental integral para todos y todas, 3) Contribuyen a la conservación e
                interpretación de nuestro patrimonio arqueológico e histórico.</p>
            </div>
            <div class="btn-container">
              <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
            </div>
          </div>
        </div>

        <div class="Facultades">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt="Person" class="FacultadIMG" />
          <center>
            <p class="containerTitle">Facultad de Ciencias Económicas</p>
          </center>
          <div class="card_content3mil">
            <div class="containerText">
              <p class="containerParr">En la Facultad de Ciencias Sociales creemos que un mundo mejor es posible. Consideramos que, a través de la investigación, la intervención clínica, la docencia y la extensión, podemos aportar datos,
                formar opiniones y definir proyectos, programas y políticas que: 1) Inciden en la creación de sociedades más justas, equitativas y pacíficas, 2) Procuran la salud mental integral para todos y todas, 3) Contribuyen a la conservación e
                interpretación de nuestro patrimonio arqueológico e histórico.</p>
            </div>
            <div class="btn-container">
              <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
            </div>
          </div>
        </div>

        <div class="Facultades">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt="Person" class="FacultadIMG" />
          <center>
            <p class="containerTitle">Facultad de Comunicación</p>
          </center>
          <div class="card_content3mil">
            <div class="containerText">
              <p class="containerParr">En la Facultad de Ciencias Sociales creemos que un mundo mejor es posible. Consideramos que, a través de la investigación, la intervención clínica, la docencia y la extensión, podemos aportar datos,
                formar opiniones y definir proyectos, programas y políticas que: 1) Inciden en la creación de sociedades más justas, equitativas y pacíficas, 2) Procuran la salud mental integral para todos y todas, 3) Contribuyen a la conservación e
                interpretación de nuestro patrimonio arqueológico e histórico.</p>
            </div>
            <div class="btn-container">
              <button onClick={() => handleClick(urls[0])} class="btn draw-border">Información</button>
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