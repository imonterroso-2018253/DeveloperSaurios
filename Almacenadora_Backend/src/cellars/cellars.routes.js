const express = require('express');
const api = express.Router();
const cellarsController = require('./cellars.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

//RUTAS PÚBLICAS
api.get('/', cellarsController.test); 

//RUTA PRIVADA PERO ACCESIBLE A CUALQUIER ROL
/*api.post('/search', ensureAuth, cellarsController.);*/

//RUTAS PRIVADAS DE ADMINISTRADOR
api.post('/add', [ensureAuth, isAdmin], cellarsController.addCellars); //RUTA PRIVADA POR ROL/*
api.put('/update/:id', [ensureAuth, isAdmin], cellarsController.updateCellar);
api.delete('/delete/:id', [ensureAuth, isAdmin], cellarsController.deleteCellar);

module.exports = api;