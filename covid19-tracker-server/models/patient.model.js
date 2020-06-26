var mongoose =  require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var utils = require('../util/util');

var patientSchema = new mongoose.Schema({
    name:{type: String, required: true },
    age: Number,
    address: String,
    district: {type: String, enum:utils.getDistrictList()},
    recentTravelHistory: {
        country: String,
        dateOfArrival: Date
    },
    datePositive:{type:Date, default:Date.now()},
    fromQuarantine: Boolean,
    status: {type: String, enum: utils.getPatientStatusList()},
});

patientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Patient', patientSchema );
