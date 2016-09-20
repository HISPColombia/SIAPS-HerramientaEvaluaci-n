var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/auth/:username/:password', function (req, res) {
 
    
     models.user.findAll({
        where: {
             usname: req.params.username,
             uspassword: req.params.password
         }}).then(function (result) {
         publicResource.ReturnResult(res, result);
     });

});

module.exports = router;
