import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'
import '../../CSS/stars.css'
import { useEffect } from "react"
import { useState } from "react"

export const Pana = () => {
  const MAX_STARS = 10;

    const [rating, setRating] = useState(0);
  
    const handleStarClick = (index, isHalf) => {
      setRating(index + (isHalf ? 0.5 : 1));
    };


    return (
        <>

    <div className="containerU"> 
           
           <img src="https://whatthelogo.com/storage/logos/universidad-rafael-landivar-85742.png" alt=""  width={'290vw'} height={'300vh'}/>

           <div className="TitulosU">
           <h1 class="cssFont_2" >UNIVERSIDAD RAFAEL LANDIVAR</h1>
            <p className="cssFont_3" >Conecta tu pasion</p>
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
      <p>Valoración: {rating} de {MAX_STARS }</p>
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

    <div class="container6">
  <div class="cards">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/01/2022-DG-3-scaled.jpg" alt="Person" class="card__image"/>
    <center>
    <p class="card__name">FACULTAD DE CIENCIAS ECONÓMICAS</p>
    </center>
    <div class="grid-container">
<br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>

  <div class="cards">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/IMG_1150-4-scaled.jpg" alt="Person" class="card__image"/>
    <center>
    <p class="card__name">FACULTAD DE CIENCIAS JURÍDICAS Y DE LA JUSTICIA</p>
    </center>
    <div class="grid-container">
    <br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/2021-PER-Radio-1-1-scaled-e1676652470156.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">FACULTAD DE INGENIERÍA Y CIENCIAS APLICADAS</p>
    </center>
    <div class="grid-container">
      <br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://conceptodefinicion.de/wp-content/uploads/2019/08/C_Humanidades.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de Ciencias Médicas</p>
    </center>
    <div class="grid-container">
      <br /><br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://revistas.ucr.ac.cr/public/site/images/marcelaq/Imagen_Nuevas_normas1.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de Odontologia</p>
    </center>
    <div class="grid-container">
      <br /><br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://blog.tiching.com/wp-content/uploads/2018/06/Humanidades.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de Teología</p>
    </center>
    <div class="grid-container">
      <br /><br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://definicion.de/wp-content/uploads/2008/03/economia.png" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de ciencia de la educación</p>
    </center>
    <div class="grid-container">
      <br /><br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="data:image/jpeg;base64,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" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">FACULTAD DE CIENCIAS DE LA COMUNICACIÓN</p>
    </center>
    <div class="grid-container">
      <br /><br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://corporaciontecnologico.com/tec/wp-content/uploads/2019/10/122201625640PMy0gtmlcs_Big.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">FACULTAD DE CIENCIAS DE LA SALUD</p>
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