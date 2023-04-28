'use strict'

const Lease = require('./lease.model');
const User = require('./user.model');

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
            .populate('user', )
            .lean
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting leases'});
    }
}