const Cellars = require('./cellars.model');
const Benefit = require('../benefit/benefit.model');


exports.test = (req, res)=>{
    return res.send({message: 'test function is running'});
}

exports.addCellars = async(req, res)=>{
    try{
        //Obtener datos del usuario (Body)
        let data = req.body;
        //¿Hay una validación?
        //Validar que llegue la categoría
        let dataRequired = data.benefit;
        if(!dataRequired) return res.status(400).send({message: 'Param benefit is required'});
        //Validar que exista el servicio!!!
        let alreadyBenefit = await Benefit.findOne({_id: data.benefit}); //undefined
        if(!alreadyBenefit) return res.status(400).send({message: 'Service not found'});
        let newCellar = new Cellars(data);
        await newCellar.save();
        return res.status(201).send({message: 'Cellar saved sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating Cellar'});
    }
}

exports.updateCellar = async(req, res)=>{
    try {
        //Obtener el id del Cellar a actualizar
        let cellarId = req.params.id;
        //Obtener la data a actualizar
        let data = req.body;
        //Validar que exista el servicio
        let existBenefit = await Benefit.findOne({_id: data.benefit});
        if(!existBenefit) return res.status(404).send({message: 'Benefit not found'});
        //Actualizar
        let updatedCellar = await Cellar.findOneAndUpdate(
            {_id: cellarId},
            data,
            {new: true}
        ).populate('benefit')
        if(!updatedCellar) return res.send({message: 'Cellar not found and not updated'});
        return res.send({message: 'Cellar updated:', updatedCellar});
    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error updating Cellar'})
    }
}

exports.deleteCellar = async(req, res)=>{
    try {
        let idCellar = req.params.id;
        let deletedCellar = await Cellars.findOneAndDelete({_id: idCellar});
        if(!deletedCellar) return res.status(404).send({message: 'Cellar not found or already deleted'});
        return res.send({message: 'Cellar deleted sucessfully'})
    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error deleting Cellar'})
    }
}