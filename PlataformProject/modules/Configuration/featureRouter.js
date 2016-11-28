var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/feature', function (req, res) {
    models.feature.findAll({ limit: 1000, order: '"feoid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/featuresubdimension', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT feature.feoid, feature.fename, subdimension.suname FROM public.feature inner join public.subdimension on subdimension.suoid = feature.suoid order by feoid asc";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/feature/:feoid', function (req, res) {
    models.feature.findAll({ 
        where: {
            feoid: req.params.feoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/feature/fk/:suoid', function (req, res) {
    models.feature.findAll({ 
        where: {
            suoid: req.params.suoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/feature/nam/:name', function (req, res) {
    models.feature.findAll({ 
        where: { fename: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/feature', function (req, res) {
    models.feature.create({ feoid: req.body.feoid, fename: req.body.fename, suoid: req.body.suoid })
   .then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});

router.put('/sys/feature/:feoid', function (req, res) {
    models.feature.update({ fename: req.body.fename, suoid: req.body.suoid  },
    { 
        where: {
             feoid: req.params.feoid 
            }
        }).then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});

router.delete('/sys/feature/:feoid', function (req, res) {
    models.feature.destroy({ where: { feoid: req.params.feoid }})
    .then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});
router.p
module.exports = router;
