// https://code.tutsplus.com/es/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543
var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');

exports.createToken = function(user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};