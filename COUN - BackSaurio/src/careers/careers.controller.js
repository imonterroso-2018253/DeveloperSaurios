'use strict'

const Career = require('./careers.model');

exports.test = (req, res)=> {
    return res.send({message: 'test function is running'});
}

exports.save = async(req, res)=> {
    try{
        let data = req.body;
        let newCareer = new Career(data);
        await newCareer.save();
        return res.status(201).send({message: 'Career saved successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating this career'});
    }
}

exports.getCareer = async(req, res)=> {
    try{
        let careers = await Career.find();
        return res.send(careers)
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting careers'});
    }
}

exports.update = async(req, res)=> {
    try{
        let careerId = req.params.id;
        let data = req.body;
        let updateCareer = await Career.findOneAndUpdate(
            {_id: careerId},
            data,
            {new: true}
        )
        if(!updateCareer) return res.status(404).send({message: 'Career not found and cannot be updated'});
        return res.send({message: 'Career updated', updateCareer});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error updating career'});
    }
}

exports.delete = async(req, res)=> {
    try{
        let idCareer = req.params.id;
        let deleteCareer = await Career.findOneAndDelete({_id: idCareer});
        if(!deleteCareer) return res.status(404).send({message: 'Career not found and cannot be deleted'});
        return res.send({message: 'Career deleted successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error deleting career'});
    }
}