var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/teamproject', function (req, res) {
     var sequelize = connection.open();
    var query = "SELECT tp.tpoid, tp.proid, tp.rooid, tp.usoid, pr.prname ,ro.rodescription, ro.roinitials, u.usname FROM public.teamproject tp, public.role ro, public.user u, public.project pr WHERE tp.rooid = ro.rooid AND tp.usoid = u.usoid and tp.proid = pr.proid order by tp.tpoid asc";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/teamproject/:tpoid', function (req, res) {
    models.teamproject.findAll({ 
        where: {
            tpoid: req.params.tpoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/teamproject/rol/:rooid', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT feature.feoid, feature.fename, subdimension.suname FROM public.feature inner join public.subdimension on subdimension.suoid = feature.suoid order by feoid asc";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/teamproject/user/:usoid', function (req, res) {//listar los proyectos que son del usuario con el filtro de rol y usuario
    var sequelize = connection.open();
    var query = "SELECT pr.proid, pr.prname, r.rooid, r.rodescription, u.usoid, u.usname FROM public.teamproject tp, public.project pr, public.user u, public.role r WHERE pr.proid = tp.proid AND u.usoid = tp.usoid AND r.rooid = tp.rooid AND u.usoid ="+req.params.usoid+" order by pr.proid asc";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/teamproject/fk/:proid', function (req, res) {
    models.teamproject.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/teamproject', function (req, res) {
    models.teamproject.create({ proid: req.body.proid, rooid: req.body.rooid, usoid: req.body.usoid })
   .then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});

router.put('/sys/teamproject/:tpoid', function (req, res) {
    models.teamproject.update({ proid: req.body.proid, rooid: req.body.rooid, usoid: req.body.usoid },
    { 
        where: {
             tpoid: req.params.tpoid 
            }
        }).then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});

router.delete('/sys/teamproject/:tpoid', function (req, res) {
    models.teamproject.destroy({ where: { tpoid: req.params.tpoid }})
    .then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});
router.p
module.exports = router;
