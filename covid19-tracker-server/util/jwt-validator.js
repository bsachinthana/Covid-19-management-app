var jwt = require('jsonwebtoken');
var config = require('./config');
module.exports = function( req ,res ,next)
{
    var token = req.get('Authorization');;
    console.log(token);
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.status(401).json({ message: 'INVALID_TOKEN' });
            } else {
                req.authPayload = decoded;
                next();
            }
        });

    } else {
        // if there is no token
        // return an error
        return res.status(401).json({ status: 500, message: 'NO_TOKEN' });
    }
}

