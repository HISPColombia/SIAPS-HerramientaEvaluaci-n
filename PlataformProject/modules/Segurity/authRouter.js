var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var service = require("../../config/service");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var jwt = require("jsonwebtoken");
var config = require('../../config/config');

router.post('/sys/auth', function (req, res) {
        models.user.findAll({ where: { usname: req.body.usname }}).then(function (result) {
             if(result.length == 0 ){
                   console.log("result.length == 0");
                   res.json([{ success: false, message: 'Authentication failed. User not found.' }]);
                }
             else if(bcrypt.compareSync(req.body.uspassword, result[0].uspassword) == true )
                {
                    var auth =[{
                    success: true,
                    usoid:  result[0].usoid,
                    usname: result[0].usname,
                    uspassword:  result[0].uspassword,
                    peoid:  result[0].peoid,
                    usstatus:  result[0].usstatus,
                    ustoken:  result[0].ustoken                    
                }];
                publicResource.ReturnResult(res, auth); 
                 //publicResource.ReturnResult(res, result); 
                 }
                else 		// return the information including token as JSON
                    res.json([{ success: false, message: 'Authentication failed. Wrong password.' }]);
                 });
});
module.exports = router;