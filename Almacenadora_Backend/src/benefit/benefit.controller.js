'use strict'

const Benefit = require('./benefit.model');

exports.test = (req, res)=>{
    return res.send({message: 'test function is running'});
}

exports.create = async(req, res)=>{
    try {
        let data = req.body;
        let benefit = new Benefit(data);
        await benefit.save();
        return res.send({message: 'Benefit created successfully'});
    } catch (err) {
        return res.status(500).send({message:'Error creating benefit'})
    }
}

exports.get = async(req, res)=>{
    try {
        let benefits = await Benefit.find()
        return res.send({benefits});
    } catch (err) {
        return res.status(500).send({message:'Error getting benefits'})        
    }
}

exports.update = async(req, res)=>{
    try {
        let benefitId = req.params.id;
        let data = req.body;
        let benefit = await Benefit.findOne({_id: benefitId});
        if(!benefit) return res.status(404).send({message: 'Benefit not found'});
        let updatedBenefit = await Benefit.findOneAndUpdate(
            {_id: benefitId},
            data,
            {new: true}
        )
        return res.send({message: 'Benefit updated successfully'})
    } catch (err) {
        return res.status(500).send({message: 'Error updating benefit'})
    }
}

exports.delete = async(req, res)=>{
    try {
        let benefitId = req.params.id;
        let benefitDeleted = await Benefit.deleteOne({_id: benefitId});
        if(benefitDeleted.deletedCount === 0) return res.status(404).send({message:'Benefit not found and not deleted'});
        return res.send({message:'Benefit deleted successfully'})
    } catch (err) {
        return res.status(500).send({message:'Error deleting benefit'})
    }
}

