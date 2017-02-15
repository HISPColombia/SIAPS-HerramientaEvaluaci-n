var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var service = require("../../config/service");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var jwt = require("jsonwebtoken");
var config = require('../../config/config');

router.post('/sys/auth', function (req, res) {
        models.user.findAll({
        where: {
             usname: req.body.usname
         }}).then(function (result) {
             if(result.length == 0 )
                   res.json({ success: false, message: 'Authentication failed. User not found.' });
             else
                if(bcrypt.compareSync(req.body.uspassword, result[0].uspassword) == true )
                {
                    // var token = jwt.sign({ usname: req.body.usname}, config.TOKEN_SECRET);
                    // console.log(token);
                    // res.json({
                    // success: true,
                    // message: 'Enjoy your token!',
                    // token: token
                    // });
                    publicResource.ReturnResult( res.json({ success: true, message: 'Authentication success' }) + res, result); 
                 }
                    //publicResource.ReturnResult(res, result); 
                else 		// return the information including token as JSON
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                 });
});
module.exports = router;