var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var middleware = require('../../config/middleware');
//var jwt = require("jsonwebtoken");

function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

router.get('/sys/person', function (req, res) {
    // var token = req.headers.authorization.split(" ")[1];  
	// res.json({ message: 'Estás autenticado correctamente y tu _id es:' });
    models.person.findAll({ limit: 1000,  order: '"peoid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/person/:id', function (req, res) {
    models.person.findAll({ 
        where: { $or: [{peoid: req.params.id}, {peidentify: req.params.id}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/person/nam/:name', function (req, res) {
    models.person.findAll({ 
        where: { $or: [{pename: {$like: '%'+req.params.name+'%'}}, {pesurname: {like: '%'+ req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/person', function (req, res) {
    models.person.create({ peoid: req.body.peoid, peidentify: req.body.peidentify, pename: req.body.pename, pesurname: req.body.pesurname, pestudies: req.body.pestudies, peprofdescription: req.body.peprofdescription,pemail: req.body.pemail,petelephon: req.body.petelephon })
   .then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});

router.put('/sys/person/:peoid', function (req, res) {
  models.person.update({ peidentify: req.body.peidentify, pename: req.body.pename, pesurname: req.body.pesurname, pestudies: req.body.pestudies, peprofdescription: req.body.peprofdescription,pemail: req.body.pemail,petelephon: req.body.petelephon },
    { 
        where: {
             peoid: req.params.peoid 
            }
        }).then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});

router.delete('/sys/person/:peoid', function (req, res) {
    models.person.destroy({ where: { peoid: req.params.peoid }})
    .then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});
router.p
module.exports = router;