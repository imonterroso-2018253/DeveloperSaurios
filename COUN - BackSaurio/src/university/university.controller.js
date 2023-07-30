'use strict'

const University = require("../university/university.model")
const Faculty = require("../faculty/faculty.model")


exports.defaultUniversity = async()=>{
    try{
        let defUniversity = {
            name: 'Universidad del Itsmo',
            description: 'Formar profesionistas en los campos de arquitectura, urbanismo, arquitectura de paisaje y diseño industrial, comprometidos con la sociedad, capaces, informados, críticos, reflexivos y responsables.',
            faculty: null
        }
        let existUniversity = await University.findOne({name: 'Universidad del Valle'});
        if(!existUniversity) return console.log('Default university already created');
        let faculty = await Faculty.findOne({ name: 'Facultad de Arquitectura', name:'Facultad de Artes y Diseño' });
        if (!faculty) {
            return console.log('Faculty not found');
        }
        defUniversity.faculty = faculty._id;
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university created');
    }catch(err){
        return console.error(err);
    }
}

exports.saveUniversity = async (req, res) => {
    try {
        let data = req.body;
        let newUniversity = new University(data);
        await newUniversity.save();
        return res.status(201).send({ message: 'University saved sucessfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating this University' });
    }
}

exports.updateUniversity = async(req, res)=> {
    try{
        let universityId = req.params.id;
        let data = req.body;
        let updateUniversity = await University.findOneAndUpdate(
            {_id: universityId},
            data,
            {new: true}
        )
        if(!updateUniversity) return res.status(404).send({message: 'University not found and cannot be updated'});
        return res.send({message: 'University updated', updateUniversity});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error updating university'});
    }
}

exports.getUniversity = async(req, res)=> {
    try{
        let universities = await University.find({_id: req.params.id});
        return res.send(universities)
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting universities'});
    }
}

exports.deleteUniversity = async(req, res)=> {
    try{
        let idUniversity = req.params.id;
        let deleteUniversity = await University.findOneAndDelete({_id: idUniversity});
        if(!deleteUniversity) return res.status(404).send({message: 'University not found and cannot be deleted'});
        return res.send({message: 'University deleted successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error deleting university'});
    }
}
