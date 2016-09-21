var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

router.get('/sys/auth/:username/:password', function (req, res) {
 
     models.user.findAll({
        where: {
             usname: req.params.username
         }})
         .then(function (result) {
             alert(result.uspassword)
             var salt = bcrypt.genSaltSync(10);
          if (bcrypt.hashSync(req.params.password, salt) === result.uspassword) 
              publicResource.ReturnResult(res, result);
     });

});

module.exports = router;
