'use strict'

const User = require('./user.model');
const { validateData, encrypt, checkPassword, checkUpdate } = require('../utils/validate');
const { createToken } = require('../services/jwt');

exports.defaultAdmin = async()=>{
    try{
        let defAdmin = {
            name: 'NOJ',
            surname: 'NOJ',
            username: 'NOJ',
            password: await encrypt('NOJ123'),
            email: 'NOJ@kinal.edu.gt',
            role: 'ADMIN',
        }
        let existAdmin = await User.findOne({name: 'NOJ'});
        if(existAdmin) return console.log('Default admin already created');
        let createdAdmin = new User(defAdmin);
        await createdAdmin.save();
        return console.log('Default admin created');
    }catch(err){
        return console.error(err);
    }
}

exports.defaultUser = async()=>{
    try{
        let defUser = {
            name: 'Ian',
            surname: 'Monterroso',
            username: 'Imonterroso',
            password: await encrypt('123'),
            email: 'imonterroso@kinal.edu.gt',
            role: 'USER',
        }
        let existUser = await User.findOne({name: 'Ian'});
        if(existUser) return console.log('Default user already created');
        let createdUser = new User(defUser);
        await createdUser.save();
        return console.log('Default user created');
    }catch(err){
        return console.error(err);
    }
}

exports.test = (req, res)=>{
    res.send({message: 'Test function is running', user: req.user});
}

exports.register = async(req, res)=>{
    try{
        let data = req.body;
        data.password = await encrypt(data.password);
        let user = new User(data);
        await user.save();
        return res.send({message: 'Account created sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating account', error: err.message});
    }
}

exports.login = async(req, res)=>{
    try{
        //obtener la data a validar (username y password)
        let data = req.body
        let credentials = {
            username: data.username,
            password: data.password
        }
        let msg = validateData(credentials)
        if(msg) return res.status(400).send({message: msg})
        //Validar que exista el usuario en la BD
        let user = await User.findOne({username: data.username})
        //Validar que la contraseña coincida
        if(user && await checkPassword(data.password, user.password)) {
            let token = await createToken(user)
            let userLogged = {
                username: user.username,
                name: user.name,
                role: user.role
            }
            return res.send({message: 'User logged successfully', token, userLogged})
        }
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error not logged'})
    }
}

exports.delete = async (req, res) => {
    try {
      let userId = req.params.id;
      let userRole = req.user.role;
      if (userRole !== 'ADMIN') {
        return res.status(401).send({ message: 'No tienes permiso para realizar esta acción' });
      }
      let userDeleted = await User.findOneAndDelete({ _id: userId });
      if (!userDeleted) {
        return res.send({ message: 'Usuario no encontrado y no eliminado' });
      }
      return res.send({ message: `Cuenta con nombre de usuario ${userDeleted.username} eliminada exitosamente` });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error al eliminar la cuenta' });
    }
  };

  exports.update = async (req, res) => {
    try {
      let userId = req.params.id;
      let data = req.body;
      let update = checkUpdate(data, true);
      if (!update) {
        return res.status(400).send({ message: 'Se han enviado datos que no pueden ser actualizados' });
      }
     let userUpdated = await User.findOneAndUpdate({ _id: userId }, data, { new: true });
     if (!userUpdated) {
        return res.status(404).send({ message: 'Usuario no encontrado y no actualizado' });
      }
      return res.send({ message: 'Usuario actualizado', userUpdated });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error al actualizar el usuario', err: `El nombre de usuario ${err.keyValue.username} ya está en uso` });
    }
  };

exports.get = async(req, res)=>{
    try {
        let users = await User.find()
        return res.send({users});
    } catch (err) {
        return res.status(500).send({message:'Error getting Users'})        
    }
}

exports.getUser = async(req, res)=>{
    try{

        let userId = req.params.id;
        if(!userId) return res.send ({mesasge: 'loading id'})
        let user = await User.findOne({_id: userId})
        if(!user) return res.status(404).send({message: 'User not found'});
        return res.send({mesasge: 'User found:', user});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting user'});
    }
}