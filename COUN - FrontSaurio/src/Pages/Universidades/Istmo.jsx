import React from "react"
import { Link } from "react-router-dom"
import '../../CSS/istmocartas.css'
import '../../CSS/cardsF.css'

export const Istmo = () => {
    return (
        <>

    <div className="containerU"> 
           
           <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo-UNIS.png" alt=""  width={'290vw'} height={'300vh'}/>

           <div className="TitulosU">
           <h1 class="cssFont_2" >UNIVERSIDAD DEL ISTMO</h1>
            <p className="cssFont_3" >Saber para servir</p>
           </div>
    </div>

    <div class="container">
  <div class="card">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/01/2022-DG-3-scaled.jpg" alt="Person" class="card__image"/>
    <center>
    <p class="card__name">Facultad de Arquitectura y Diseño</p>
    </center>
    <div class="grid-container">
    </div>
    <button class="btn draw-border">Comenta!</button>
    <button class="btn draw-border">Ver comentarios</button>
  </div>

  <div class="card">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/IMG_1150-4-scaled.jpg" alt="Person" class="card__image"/>
    <center>
    <p class="card__name">Facultad de Ciencias Económicas</p>
    </center>
    <div class="grid-container">
    </div>
    <button class="btn draw-border">Comenta</button>
    <button class="btn draw-border">Ver comentarios</button>
  </div>
  <div class="card">
    <img src="https://unis.edu.gt/wp-content/uploads/2023/02/2021-PER-Radio-1-1-scaled-e1676652470156.jpg" alt="Person" class="card__image"/>
    
    <center>
    <p class="card__name">Facultad de Comunicación</p>
    </center>
    <div class="grid-container">
    </div>
    <button class="btn draw-border">Comenta</button>
    <button class="btn draw-border">Ver comentarios</button>
  </div>
</div>
        </>
    )
}