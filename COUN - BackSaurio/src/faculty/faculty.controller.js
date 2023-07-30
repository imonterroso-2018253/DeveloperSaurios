'use strict'

const Faculty = require('./faculty.model');

exports.test = (req, res)=> {
    return res.send({message: 'test function is running'});
}

exports.defaultFaculty = async()=>{
    try{
        let defFaculty = {
            name: 'Facultad de Arquitectura',
            description: 'Formar profesionistas en los campos de arquitectura, urbanismo, arquitectura de paisaje y diseño industrial, comprometidos con la sociedad, capaces, informados, críticos, reflexivos y responsables.',
            mensuality: 200
        }
        let existFaculty = await Faculty.findOne({name: 'Facultad de Arquitectura'});
        if(existFaculty) return console.log('Default faculty already created');
        let createdFaculty = new Faculty(defFaculty);
        await createdFaculty.save();
        return console.log('Default faculty created');
    }catch(err){
        return console.error(err);
    }
}

exports.defaultFaculty2 = async()=>{
    try{
        let defFaculty = {
            name: 'Facultad de Artes y Diseño',
            description: 'La Facultad de Artes y Diseño es la institución encargada de formar profesionistas e investigadores de las artes y el diseño; de resguardar sus acervos históricos y artísticos, cumpliendo con altos estándares internacionales.',
            mensuality: 300
        }
        let existFaculty = await Faculty.findOne({name: 'Facultad de Artes y Diseño'});
        if(existFaculty) return console.log('Default faculty already created');
        let createdFaculty = new Faculty(defFaculty);
        await createdFaculty.save();
        return console.log('Default faculty created');
    }catch(err){
        return console.error(err);
    }
}

exports.defaultFaculty3 = async()=>{
    try{
        let defFaculty = {
            name: 'Facultad de Contaduría y Administración',
            description: 'Formar profesionistas emprendedores y competentes en áreas de negocios, con el conocimiento, los valores, las actitudes y las habilidades cognitivas, sociales, emocionales y digitales esenciales para participar en la cuarta revolución industrial.',
            mensuality: 500
        }
        let existFaculty = await Faculty.findOne({name: 'Facultad de Contaduría y Administración'});
        if(existFaculty) return console.log('Default faculty already created');
        let createdFaculty = new Faculty(defFaculty);
        await createdFaculty.save();
        return console.log('Default faculty created');
    }catch(err){
        return console.error(err);
    }
}

exports.defaultFaculty4 = async()=>{
    try{
        let defFaculty = {
            name: 'Facultad de Derecho',
            description: 'Este programa de estudios está diseñado para el perfeccionamiento profesional a través de la formación en la doctrina y práctica penal contemporánea.',
            mensuality: 400
        }
        let existFaculty = await Faculty.findOne({name: 'Facultad de Derecho'});
        if(existFaculty) return console.log('Default faculty already created');
        let createdFaculty = new Faculty(defFaculty);
        await createdFaculty.save();
        return console.log('Default faculty created');
    }catch(err){
        return console.error(err);
    }
}

exports.save = async(req, res)=> {
    try{
        let data = req.body;
        let newFaculty = new Faculty(data);
        await newFaculty.save();
        return res.status(201).send({message: 'Faculty saved successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating this faculty'});
    }
}

exports.getFaculty = async(req, res)=> {
    try{
        let facultys = await Faculty.find();
        return res.send(facultys)
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting facultys'});
    }
}

exports.update = async(req, res)=> {
    try{
        let facultyId = req.params.id;
        let data = req.body;
        let updateFaculty = await Faculty.findOneAndUpdate(
            {_id: facultyId},
            data,
            {new: true}
        )
        if(!updateFaculty) return res.status(404).send({message: 'Faculty not found and cannot be updated'});
        return res.send({message: 'Faculty updated', updateFaculty});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error updating faculty'});
    }
}

exports.delete = async(req, res)=> {
    try{
        let idFaculty = req.params.id;
        let deleteFaculty = await Faculty.findOneAndDelete({_id: idFaculty});
        if(!deleteFaculty) return res.status(404).send({message: 'Faculty not found and cannot be deleted'});
        return res.send({message: 'Faculty deleted successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error deleting faculty'});
    }
}