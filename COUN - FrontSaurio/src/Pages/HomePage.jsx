import React from 'react';
import logo from '../assets/logo.png';
import '../CSS/HomePage.css';

export const HomePage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Por ejemplo, puedes obtener los valores del input y el menú desplegable y enviarlos a la página de búsqueda
    // Puedes usar el método fetch() o axios para realizar la solicitud
    // Ejemplo:
    // const searchText = event.target.elements.searchText.value;
    // const selectedOption = event.target.elements.selectedOption.value;
    // Realizar la solicitud de búsqueda con los valores obtenidos
  };

  return (
    <>
      <body className="fade-in-animation body5mil">

        <div className="container1HP ">

          <div className="contenedorHP">
            <div>
              <img src={logo} alt="Person" className="hpIMG" />
            </div>

            <div className="containerHP">
              <h1 className="titulo"><b>COUN</b></h1>

              <h2 className="">Sean bienvenidos a <b>COUN</b> <p><b>CO</b>nocimientos de las <b>UN</b>iversidades.</p></h2>
              <p className='pHP'>
                ¡Bienvenidos a COUN, tu fuente confiable de información sobre universidades y educación superior! Somos un equipo apasionado por brindar conocimientos valiosos para ayudarte en tu búsqueda de la educación adecuada. Ya sea que estés buscando información sobre universidades, maestrías, cursos o programas académicos, estás en el lugar indicado.
                En COUN, nos esforzamos por ofrecerte datos actualizados y detallados sobre diversas instituciones educativas y programas de estudio. Nuestro objetivo es facilitar el proceso de toma de decisiones, proporcionándote información precisa y relevante que te ayude a elegir el camino académico que mejor se adapte a tus intereses y metas profesionales.
              </p>
            </div>

          </div>


        </div>

        <div className='search-container'>
          <form className='search-form' onSubmit={handleSubmit}>
            <input
              name='searchText'
              autoComplete='off'
              placeholder='Busca carreras, maestrías o cursos...'
              type='text'
            />
            <div className='dropdown-container'>
              <select name='selectedOption' className='dropdown-search'>
                <option selected disabled>
                  GRADO ACADÉMICO
                </option>
                <option value='27'>Posgrado</option>
                <option value='13'>Curso libre</option>
                <option value='9'>Maestría</option>
                <option value='8'>Licenciatura</option>
                <option value='6'>Diplomado</option>
                <option value='4'>Técnico superior</option>
                <option value='3'>Técnico</option>
                <option value='2'>Bachillerato</option>
              </select>
              <div className='dropdown-content'>
                {/* Aquí van las opciones del menú desplegable */}
              </div>
            </div>
            <button type='submit'>
              <span>Encontrar carrera</span>
              <i className='fa fa-search'></i>
            </button>
            <a href='#' className='searchClear fa fa-times-circle hidden'></a>
          </form>
        </div>

      </body>
    </>
  );
};