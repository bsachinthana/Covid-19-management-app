var express = require('express');
var router = express.Router();
var Patient = require("../models/patient.model");

router.get('/today', function (req, res, next) {
    var date = new Date(Date.now());
    date.setHours(00, 00, 00, 000);
    Patient.aggregate([
        {
            $match: {
                datePositive: {
                    $gte: date
                }
            }
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            },
        }
    ], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

router.get('/current', function (req, res, next) {
    Patient.aggregate([
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            },
        }
    ], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});

router.get('/week', function (req, res, next) {
    const dateTo = new Date(Date.now());
    dateTo.setHours(23, 59, 59);
    const dateFrom = new Date(Date.now());
    dateFrom.setDate(dateTo.getDate() - 6);
    dateFrom.setHours(00, 00, 00);

    Patient.aggregate([
        {
            $match: {
                "datePositive": {
                    "$gte": dateFrom.toISOString(),
                    "$lte": dateTo.toISOString()
                }
            }
        },
        {
            $group: {
                _id: {
                    date: { $substr: ["$datePositive", 0, 10] },
                    status: "$status"
                },
                count: { $sum: 1 }
            }
        },
        {
            $group: {
                _id: "$_id.date",
                stats: {
                    $push: {
                        status: "$_id.status",
                        count: "$count"
                    }
                }
            }
        }
    ], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

router.get('/districtWise', function (req, res, next) {
    Patient.aggregate([
        {
            $group: {
                _id: "$district",
                count: { $sum: 1 }
            },
        }
    ], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});
module.exports = router;