var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    name:{type: String, required: true },
    email:{type:String, required:true, unique:true},
    accessLevel:{type:String, enum:["Admin","Editor"], default:"Editor"},
    salt: String,
    password: {type:String, required: true}

});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 250, 64, 'sha512').toString('hex');
  }
  
  userSchema.methods.validPassword = function(password){
    console.log(this);
    var hash = crypto.pbkdf2Sync(password, this.salt, 250, 64, 'sha512').toString('hex');

    return this.password === hash;
  };


module.exports = mongoose.model('User',userSchema );
