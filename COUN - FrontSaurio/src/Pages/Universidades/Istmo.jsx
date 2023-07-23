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
  
    const handleStarClick = (index, isHalf) => {
      setRating(index + (isHalf ? 0.5 : 1));
    };


    return (
        <>

    <div className="containerU"> 
           
           <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt=""  width={'290vw'} height={'300vh'}/>

           <div className="TitulosU">
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
    <p class="card__name">Facultad de Arquitectura y Diseño</p>
    </center>
    <div class="grid-container">
<br />
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>

  <div class="cards">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/IMG_1150-4-scaled.jpg" alt="Person" class="card__image"/>
    <center>
    <p class="card__name">Facultad de Ciencias Económicas</p>
    </center>
    <div class="grid-container">
    <br/>
    </div>
    <button class="btn draw-border">Comentarios</button>
  </div>
  <div class="cards">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/2021-PER-Radio-1-1-scaled-e1676652470156.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de Comunicación</p>
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