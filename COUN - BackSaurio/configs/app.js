'use strict'

const express = require('express');
//Logs de las solicitudes que reciba el servidor
const morgan = require('morgan');
//Seguridad básica al servidor
const helmet = require('helmet');
//Aceptación de solicitudes desde otro origen o desde la misma máquina
const cors = require('cors');
//Instancia de express
const app = express();
const port = process.env.PORT || 3200;
const userRoutes = require('../src/user/user.routes');
const facultyRoutes = require('../src/faculty/faculty.routes');
const universityRoutes = require('../src/university/university.routes');
const commentRoutes = require('../src/comments/comment.routes')
/* const forgotPasswordRoutes = require('../src/forgotPassword/forgotPassword.routes'); */

//CONFIGURAR EL SERVIDOR HTTP DE EXPRESS
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Rutas de cada colección
app.use('/user', userRoutes);
/* app.use('/forgotPassword' , forgotPasswordRoutes); */
app.use('/comments', commentRoutes)
app.use('/faculty', facultyRoutes);
app.use('/university', universityRoutes);

//FUNCIÓN PARA LEVANTAR EL SERVIDOR
exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}