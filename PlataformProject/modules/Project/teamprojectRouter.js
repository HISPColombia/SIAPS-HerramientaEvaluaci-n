var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/teamproject', function (req, res) {
    models.teamproject.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
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


router.get('/sys/teamproject/fk/:proid', function (req, res) {
    models.teamproject.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/teamproject', function (req, res) {
    models.teamproject.create({ tpoid: req.body.tpoid, proid: req.body.proid, rooid: req.body.rooid, usoid: req.body.usoid })
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
