import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import '../CSS/comentarios.css'




export const Comentarios = () => {

    return (
        <>
        <br /><br />
        <div className="containerC">
            <h1>Comentarios sobre Universidad tal</h1>
            <br /><br />
            <h4>Puedes comentar y ver comentarios de otros usuarios</h4>
        </div>
        <br /><br />
       

        <div class="containerC" >
            
            <form action="#">
             <ul>         
         <div class="comment-container">
             <textarea class="comment-textarea" placeholder="Escribe tu comentario aquí..."></textarea>
             <button class="btn0"> Comentar</button>
         </div>
        
      </ul>
    </form>  
  
</div>

<br /><br />
<div class="comments-container">
		<h1>Comentarios </h1>

		<ul id="comments-list" class="comments-list">
			<li>
				<div class="comment-main-level">
				
					<div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
					
					<div class="comment-box">
						<div class="comment-head">
							<h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
							<span>hace 20 minutos</span>
							<i class="fa fa-reply"></i>
							<i class="fa fa-heart"></i>
						</div>
						<div class="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
				<ul class="comments-list reply-list">
					<li>
						
						<div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
						
						<div class="comment-box">
							<div class="comment-head">
								<h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
								<span>hace 10 minutos</span>
								<i class="fa fa-reply"></i>
								<i class="fa fa-heart"></i>
							</div>
							<div class="comment-content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
							</div>
						</div>
					</li>

					<li>
	
						<div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
					
						<div class="comment-box">
							<div class="comment-head">
								<h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
								<span>hace 10 minutos</span>
								<i class="fa fa-reply"></i>
								<i class="fa fa-heart"></i>
							</div>
							<div class="comment-content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
							</div>
						</div>
					</li>
				</ul>
			</li>

			<li>
				<div class="comment-main-level">
					
					<div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
					<div class="comment-box">
						<div class="comment-head">
							<h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
							<span>hace 10 minutos</span>
							<i class="fa fa-reply"></i>
							<i class="fa fa-heart"></i>
						</div>
						<div class="comment-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
{/* <div className="cuadrado">
    <h3>(nombre de la persona)</h3>
    <br />
    <h6>Comentario</h6>
    <p>Muchas mujeres de pelo rubio</p>
</div> */}

        </>
    )
}