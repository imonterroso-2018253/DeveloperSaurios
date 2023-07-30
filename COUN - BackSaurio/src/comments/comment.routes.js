const express = require('express');
const commentController = require('./comment.controller');
const likeController = require ('./like/like.controller')
const { ensureAuth } = require('../services/authenticated');

const api = express.Router();

// Ruta para guardar un comentario
api.post('/save', ensureAuth, commentController.saveComment);


// Ruta para actualizar un comentario
api.put('/update/:id', ensureAuth, commentController.updateComment);
api.put('/addLike/:id/:user',  likeController.updateComment)

// Ruta para obtener todos los comentarios
api.get('/get/:id', ensureAuth, commentController.getComments);
api.get('/getLikes/:id', likeController.getLikesByComment)

// Ruta para eliminar un comentario
api.delete('/deleteComment/:id', ensureAuth, commentController.deleteComment);
api.delete('/deleteLike/:id/:userId', ensureAuth, likeController.deleteLike);


module.exports = api;
