var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


// router.get('/sys/responsevalue', function (req, res) {
//      var sequelize = connection.open();
//     var query = "SELECT tp.tpoid, tp.proid, tp.rooid, tp.usoid, pr.prname ,ro.rodescription, ro.roinitials, u.usname FROM public.responsevalue tp, public.role ro, public.user u, public.project pr WHERE tp.rooid = ro.rooid AND tp.usoid = u.usoid and tp.proid = pr.proid order by tp.tpoid asc";
//     sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
//   .then(function (result) {
//       publicResource.ReturnResult(res, result);
//   })
// });
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
    models.responsevalue.create({ rvoid: req.body.rvoid, usoid: req.body.usoid, rvresp: req.body.rvresp, rvdate: req.body.rvdate, proid: req.body.proid, sysoid: req.body.sysoid, faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, quoid: req.body.quoid, image: req.body.image, tqoid: req.body.tqoid })
   .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.put('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.update({ rvoid: req.body.rvoid, usoid: req.body.usoid, rvresp: req.body.rvresp, rvdate: req.body.rvdate, proid: req.body.proid, sysoid: req.body.sysoid, faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, quoid: req.body.quoid, image: req.body.image },
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
