var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patientsRouter = require('./routes/patient.route');
var authRouter = require('./routes/auth.route');
var statsRouter = require("./routes/stats.route");

mongoose.connect('mongodb://127.0.0.1:27017/test',
//mongoose.connect('mongodb://autopartsadmin:autoparts2018@ds237748.mlab.com:37748/autopartsdb',
    {useNewUrlParser: true, useUnifiedTopology: true  }
    , (err, db) => {
        if (err) return console.log(err);

        global.db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    });

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/patients', patientsRouter)
app.use('/api/auth', authRouter);
app.use('/api/stats', statsRouter);
module.exports = app;
