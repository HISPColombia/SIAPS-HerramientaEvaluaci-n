var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var service = require("../../config/service");

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
                {
                    res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: service.createToken(req.body.usname)
                    });
                 }
                    //publicResource.ReturnResult(res, result); 
                else 		// return the information including token as JSON
                    {
                            res.json({
                            success: false,
                            message: 'invalid User!',
                            });
                 
                   }
                 });

});



module.exports = router;