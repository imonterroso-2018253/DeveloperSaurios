import React from 'react';
import logo from '../assets/logo.png';
import '../CSS/HomePage.css';
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <>
      <body className='fade-in-animation body5mil'>

        <div className='contenedorHP'>

          <div className=''>
            <img src={logo} alt="Person" class="hpIMG" />
          </div>

          <div className='containerHP'>
            <h1 className='titulo'>COUN</h1>

            <span className='slogan'>Opinión formada, información bien lograda</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat tempore minima saepe, tenetur, nobis, maiores quasi assumenda pariatur eveniet quo dolor modi dolore facilis autem veritatis explicabo et ducimus.
              cum, blanditiis corrupti odit sed saepe, dolore vel quidem dolores doloribus illum maxime! Enim, sint corrupti saepe iusto dignissimos ducimus alias distinctio nihil.
              In repudnte similique! Unde aperiam dolorem saepe natus rerum cum veniam soluta veritatis, suscipit tempore, eos recusandae est officiis cumque a iusto quis? Repudiandae maxime excepturi soluta!
            </p>
          </div>

        </div>

      </body>
    </>
  );
}

