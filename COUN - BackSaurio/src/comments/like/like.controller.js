const  Comment  = require('../comment.model');
const Like = require('./like.model');

exports.updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;

        // Obtener el comentario de la base de datos
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
        }

        // Incrementar el contador de likes del comentario
        comment.likesCount++;

        // Guardar el comentario actualizado en la base de datos
        const updatedComment = await comment.save();

        // Crear un nuevo registro de like asociado al comentario y usuario
        const newLike = new Like({
            user: req.params.user, // Aquí se debe proporcionar el ID del usuario que dio like
            comment: commentId
        });
        await newLike.save();

        return res.send({ message: 'Comment updated', updatedComment });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating comment' });
    }
};

exports.getLikesByComment = async (req, res) => {
    try {
      const commentId = req.params.id; // Obtén el ID del comentario desde los parámetros de ruta
  
      // Busca los likes asociados al comentario específico
      const likes = await Like.find({ comment: commentId });
  
      return res.send({ likes });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error getting likes' });
    }
  };

exports.deleteLike = async (req, res) => {
    try {
        const commentId = req.params.id;
        const userId = req.params.userId;

        // Buscar el like asociado al comentario y usuario en la base de datos
        const like = await Like.findOneAndDelete({ comment: commentId, user: userId });

        if (!like) {
            return res.status(404).send({ message: 'Like not found' });
        }

        // Obtener el comentario asociado al like
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
        }

        // Decrementar el contador de likes del comentario
        if (comment.likesCount > 0) {
            comment.likesCount--;
            await comment.save();
        }

        return res.send({ message: 'Like deleted' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting like' });
    }
};