var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

router.post('/sys/auth', function (req, res) {
        models.user.findAll({
        where: {
             usname: req.body.usname
         }}).then(function (result) {
             if(result.length == 0 )
                   publicResource.ReturnResult(res, result); 
             else
                if(bcrypt.compareSync(req.body.uspassword, result[0].uspassword) == true )
                    publicResource.ReturnResult(res, result); 
                 else
                    publicResource.ReturnResult(res); 
     });

});



module.exports = router;