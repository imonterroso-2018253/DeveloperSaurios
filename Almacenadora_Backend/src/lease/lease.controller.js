'use strict'

const Lease = require('./lease.model');
const User = require('./user.model');
const infoUser = ['name', 'surname'];
const infoCellar = ['name','description', 'availability', 'price'];

exports.createLease = async(req, res)=>{
    try{
        let data = req.body;
        let lease = new Lease(data);
        await lease.save();
        return res.send({message: 'Lease create succesfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating lease'});
    }
}

exports.getLeaseByUser = async(req, res)=>{
    try{
        let userId = req.user.sub;
        let leases = await leases.find({user: userId}, {user: 0})
            .populate('lease', infoUser)
            .lean()
        return res.send({leases});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting your Leases'});
    }
}

exports.getLeases = async(req, res)=>{
    try{
        let { fact } = req.body;
        if(!fact) return res.status(400).send({message: 'Param fact is required'});
        let facts = await User.find({fact: fact})
            .populate('user', infoUser)
            .populate('cellar', infoCellar)
            .lean
        if(facts.length === 0) return res.status(418).send({message: 'facts not found'});
        return res.send({message: 'Leases: ', facts});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting leases'});
    }
}

exports.updateLease = async(req, res)=>{
    try{
        let userId = req.params.id;
        let data = req.body;
        if(userId != req.user.sub) return res.status(401).send({message: 'This cellar is already lease'})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error update a lease'});
    }
}

exports.deleteLease = async(req, res)=>{
    try{

    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error delete a lease'});
    }
}