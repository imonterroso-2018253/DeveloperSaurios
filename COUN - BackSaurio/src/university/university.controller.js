'use strict'

const University = require("../university/university.model")

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