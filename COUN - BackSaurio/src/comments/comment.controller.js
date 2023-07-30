'use strict';

const University = require("../university/university.model");
const Comment = require("./comment.model");
const User = require("../user/user.model")

const offensiveWords = [
    'puta', 'puto', 'pendejo', 'pendeja', 'joto', 'jota', 'culo', 'coño',
    'verga', 'chingar', 'chinga', 'chingada', 'chingado', 'mierda', 'pinche',
    'cabrón', 'cabrona', 'maricón', 'marica', 'pito', 'pene', 'tetas', 'teta','tta',
    'chingón', 'chingona', 'coger',  'cogida', 'huevon','reconcha', 'reputisima',
    'huevona', 'perra', 'perro', 'mamada', 'mamar', 'joder', 'jodido',
    'desgracia', 'idiota', 'imbecil', 'pendejada', 'estúpido','estupido','estupidos','gonorrea',
    'estúpida','estupida', 'estupidez', 'baboso', 'babosa', 'babosada', 'chingadera',
    'pendejazo', 'pichar','serote','serota','0te','0ta', 'picha', 'pichada', 'cojer', 'cojida',
    'coño', 'pija', 'pene', 'vergar', 'vergazo', 'vergas', 'vergón', 'vergona',
    'culo', 'culito', 'culón', 'culos', 'culona', 'mierdera','malparida' ,'malparido',
    'pinche', 'pinche', 'cagar', 'cagada', 'cagon', 'joto', 'jota',
    'jotazo', 'tonto', 'tonta', 'tontería', 'pendejo', 'pendeja', 'pendejada',
    'idiota', 'idiotez', 'imbécil','imbecil','imbeciles', 'imbéciles', 'pendejos', 'pendejas',
    'perras', 'perras', 'pendejos', 'pendejas', 'mamon', 'mamón', 'mamones',
    'mamona', 'puto', 'puta', 'putos', 'putas', 'cabron', 'cabrón', 'cabrones',
    'cabrona', 'cabronas', 'hijueputa', 'hijueputas',
    'chingaderas', 'verga', 'vergas', 'coño', 'coños',  'mierdas',
    'pito', 'pitos',  'pelotudo', 'pelotuda','mmda','jueputa','mrda','culero','nepe','negros','salaverga','mmn','vrg','vrga', 'hdp',
    'hdps','kbron','kbrones','sho','huevudo'
  ];

  exports.saveComment = async (req, res) => {
    try {
        const data = req.body;
        const commentText = data.comment;

        // Reemplazar palabras ofensivas con asteriscos (*)
        const lowerCaseCommentText = commentText.toLowerCase();
        const sanitizedCommentText = offensiveWords.reduce((acc, word) => {
            const regex = new RegExp(word, 'gi');
            return acc.replace(regex, '*'.repeat(word.length));
        }, lowerCaseCommentText);

        // Comprobar si el comentario contiene palabras ofensivas (case insensitive)
        const isOffensive = offensiveWords.some(word => lowerCaseCommentText.includes(word.toLowerCase()));

        /* if (isOffensive) {
            return res.status(400).send({ message: 'Comment contains offensive or vulgar words' });
        } */

        // Comprobar si el usuario y el university existen en la base de datos
        const user = await User.findById(data.user);
        const university = await University.findById(data.university);

        if (!user || !university) {
            return res.status(404).send({ message: 'User or University not found' });
        }

        // Guardar el comentario con las palabras ofensivas reemplazadas en la base de datos
        data.comment = sanitizedCommentText;
        const newComment = new Comment(data);
        await newComment.save();

        return res.status(201).send({ message: 'Comment saved successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating this Comment' });
    }
}

exports.updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const data = req.body;
        const commentText = data.comment;

        // Reemplazar palabras ofensivas con asteriscos (*)
        const lowerCaseCommentText = commentText.toLowerCase();
        const sanitizedCommentText = offensiveWords.reduce((acc, word) => {
            const regex = new RegExp(word, 'gi');
            return acc.replace(regex, '*'.repeat(word.length));
        }, lowerCaseCommentText);

        // Comprobar si el comentario contiene palabras ofensivas (case insensitive)
        const isOffensive = offensiveWords.some(word => lowerCaseCommentText.includes(word.toLowerCase()));

        if (isOffensive) {
            return res.status(400).send({ message: 'Comment contains offensive or vulgar words' });
        }

        // Comprobar si el usuario y el university existen en la base de datos
        const user = await User.findById(data.user);
        const university = await University.findById(data.university);

        if (!user || !university) {
            return res.status(404).send({ message: 'User or University not found' });
        }

        // Actualizar el comentario con las palabras ofensivas reemplazadas en la base de datos
        data.comment = sanitizedCommentText;
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            data,
            { new: true }
        );

        if (!updatedComment) {
            return res.status(404).send({ message: 'Comment not found and cannot be updated' });
        }

        return res.send({ message: 'Comment updated', updatedComment });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating comment' });
    }
}

exports.getComments = async (req, res) => {
    try {
      // Obtener todos los comentarios y enviarlos en la respuesta, ordenados por likesCount y fecha en orden descendente
      const comments = await Comment.find({ university: req.params.id })
        .populate('user')
        .sort({ likesCount: -1, date: -1 }) // Ordenar por likesCount en orden descendente y luego por fecha en orden descendente
        .lean();
  
      return res.send(comments);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error getting comments' });
    }
  };
  


exports.deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;

        // Eliminar el comentario de la base de datos
        const deletedComment = await Comment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            return res.status(404).send({ message: 'Comment not found and cannot be deleted' });
        }

        return res.send({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting comment' });
    }
}