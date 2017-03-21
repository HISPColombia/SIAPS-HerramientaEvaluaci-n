var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/subfeature', function (req, res) {
    models.subfeature.findAll({ limit: 1000, order: '"sfoid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/subfeaturelist', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT subfeature.sfoid, subfeature.sfname, feature.fename FROM public.feature, public.subfeature WHERE subfeature.feoid = feature.feoid order by subfeature.sfname asc;";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/subfeature/:sfoid', function (req, res) {
    models.subfeature.findAll({ 
        where: {
            sfoid: req.params.sfoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/subfeature/nam/:name', function (req, res) {
    models.subfeature.findAll({ 
        where: { sfname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/subfeature/fk/:feoid', function (req, res) {
    models.subfeature.findAll({ 
        where: {
            feoid: req.params.feoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/subfeature', function (req, res) {
    models.subfeature.create({ sfoid: req.body.sfoid, sfname: req.body.sfname ,feoid: req.body.feoid})
   .then(function (subfeature) {
       publicResource.ReturnResult(res, subfeature);
   })
});

router.put('/sys/subfeature/:sfoid', function (req, res) {
    models.subfeature.update({ sfname: req.body.sfname ,feoid: req.body.feoid  },
    { 
        where: {
             sfoid: req.params.sfoid 
            }
        }).then(function (subfeature) {
       publicResource.ReturnResult(res, subfeature);
   })
});

router.delete('/sys/subfeature/:sfoid', function (req, res) {
    models.subfeature.destroy({ where: { sfoid: req.params.sfoid }})
    .then(function (subfeature) {
       publicResource.ReturnResult(res, subfeature);
   })
});
router.p
module.exports = router;
