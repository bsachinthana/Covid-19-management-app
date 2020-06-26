var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var errorHandler =require("../util/errorHandler");
var jwtValidator = require("../util/jwt-validator");

var Patient = require('../models/patient.model');

router.use(jwtValidator);

router.post('/add', function (req, res, next) {
    var patient = new Patient(req.body);
    patient.save(function (err, data) {
        if (err) return res.status(500).json({ msg: 'Error adding patient', data: err });
        return res.status(200).json({ data: data });
    });

});

router.post('/:id/update', function (req, res, next) {
    var id = req.params.id;
    Patient.findOneAndUpdate({id:mongoose.Types.ObjectId(id)},{set:req.body},(err, data) => {
        if (err) return errorHandler.process(res,errorHandler.ErrorCodes.BadRequest,"INVALID_PATIENT_ID", err);
        res.status(200).json(data);
    });
});

router.get('/', function (req,res,next) {
    page = 1;
    if(req.query.page){ 
        page = req.query.page
    }
    var limit =50;
    Patient.paginate({},{page: page, limit: limit},(err, result) => {
         if(err) errorHandler.process(res, errorHandler.ErrorCodes.InternalServerError,"CANNOT_GET_PATIENTS",err)
         return res.status(200).json(result);
    });
});
module.exports = router;
