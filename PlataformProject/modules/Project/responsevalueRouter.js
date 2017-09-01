var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/responsevalue/chars', function (req, res) {
     var sequelize = connection.open();
     var query = "SELECT question.ququestion, responsevalue.proid, question.optionquestion, responsevalue.rvdate, typequestion.tqdescription,responsevalue.rvresp FROM public.responsevalue, public.question, public.typequestion WHERE responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid AND responsevalue.proid = 1 ORDER BY responsevalue.quoid DESC";
     sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
    .then(function (result) {
       publicResource.ReturnResult(res, result);
   })
});
router.get('/sys/responsevalue', function (req, res) {
    models.responsevalue.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});
router.get('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            rvoid: req.params.rvoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/proid/:proid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/user/:usoid', function (req, res) {//listar los proyectos que son del usuario con el filtro de rol y usuario
    models.responsevalue.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/sys/:sysoid', function (req, res) {//listar los proyectos que son del usuario con el filtro de rol y usuario
    models.responsevalue.findAll({ 
        where: {
            sysoid: req.params.sysoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/responsevalue', function (req, res) {
    models.responsevalue.create({ rvoid:req.body.rvoid, faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, proid: req.body.proid, quoid: req.body.quoid, rvdate: req.body.rvdate, rvresp: req.body.rvresp, sysoid: req.body.sysoid, tqoid: req.body.tqoid, usoid: req.body.usoid })
   .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.put('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.update({ faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, proid: req.body.proid, quoid: req.body.quoid, rvdate: req.body.rvdate, rvresp: req.body.rvresp, sysoid: req.body.sysoid, tqoid: req.body.tqoid, usoid: req.body.usoid },
    { 
        where: {
             rvoid: req.params.rvoid 
            }
        }).then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.delete('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.destroy({ where: { rvoid: req.params.rvoid }})
    .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});
router.p
module.exports = router;
