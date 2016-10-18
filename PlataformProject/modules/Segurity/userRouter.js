var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var jwt = require("jsonwebtoken");
var config = require('../../config/config');
var middleware = require('../../config/middleware.js');

router.get('/sys/user', function (req, res) {
    models.user.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/user/:usoid', function (req, res) {
    models.user.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/user/st/:usstatus', function (req, res) {
    models.user.findAll({ 
        where: {
            usstatus: req.params.usstatus }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/user', function (req, res) {
    models.user.findAll({ 
        where: { usname: req.body.usname }}).then(function (result) {
        if(result.length  > 0)
          {   console.log("User already exists!");
               res.json([{
                     type: false,
                     data: "User already exists!"
                 }]);
               // publicResource.ReturnResult(res, result);
          }else{    
                console.log("Creando Usuario!");
                var salt = bcrypt.genSaltSync(10);
                var passwordToSave = bcrypt.hashSync(req.body.uspassword, salt);
                var token = jwt.sign({ usoid: req.body.usoid,}, config.TOKEN_SECRET);
                console.log(token)
                models.user.create({ usoid: req.body.usoid, usname: req.body.usname, uspassword: passwordToSave, peoid: req.body.peoid, usstatus: 1,ustoken: token })
                .then(function (user) {
                 publicResource.ReturnResult(res, user);
                 })
         }
    });
});


router.put('/sys/user/:usoid', function (req, res) {
    models.user.update({ usname: req.body.usname, uspassword: req.body.uspassword, peoid: req.body.peoid, usstatus: req.body.usstatus, ustoken: req.body.ustoken },
    { 
        where: {
             usoid: req.params.usoid 
            }
        }).then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});

router.delete('/sys/user/:usoid', function (req, res) {
    models.user.destroy({ where: { usoid: req.params.usoid }})
    .then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});
router.p
module.exports = router;
