var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/facilityproject', function (req, res) {
    models.facilityproject.findAll({ limit: 1000, order: '"facproid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

// router.get('/sys/facilityproject/:facproid', function (req, res) {
    // models.facilityproject.findAll({ 
        // where: { facproid: req.params.facproid}}).then(function (result) {
        // publicResource.ReturnResult(res, result);
    // });
// });

router.post('/sys/facilityproject', function (req, res) {
    models.facilityproject.create({ faoid: req.body.faoid, proid: req.body.proid })
   .then(function (facilityproject) {
       publicResource.ReturnResult(res, facilityproject);
   })
});

router.put('/sys/facilityproject/:facproid', function (req, res) {
  models.facilityproject.update({ proid: req.body.proid, faoid: req.body.faoid },
    { 
        where: {
             facproid: req.params.facproid 
            }
        }).then(function (facilityproject) {
       publicResource.ReturnResult(res, facilityproject);
   })
});

router.delete('/sys/facilityproject/:facproid', function (req, res) {
    models.facilityproject.destroy({ where: { facproid: req.params.facproid }})
    .then(function (facilityproject) {
       publicResource.ReturnResult(res, facilityproject);
   })
});
router.p
module.exports = router;