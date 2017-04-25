var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/systemproject', function (req, res) {
    models.systemproject.findAll({ limit: 1000, order: '"sysoid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/systemproject/:sysoid', function (req, res) {
    models.systemproject.findAll({ 
        where: { sysoid: req.params.sysoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/systemproject/sysDescription/:sysDescription', function (req, res) {
    models.systemproject.findAll({ 
        where: { $or: [{sysDescription: {$like: '%'+req.params.sysDescription+'%'}},{qusystemproject: {like: '%'+ req.params.sysDescription+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/systemproject', function (req, res) {
    models.systemproject.create({ sysoid: req.body.sysoid, sysDescription: req.body.sysDescription, initials: req.body.initials })
   .then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});

router.put('/sys/systemproject/:sysoid', function (req, res) {
  models.systemproject.update({ sysDescription: req.body.sysDescription, initials: req.body.initials  },
    { 
        where: {
             sysoid: req.params.sysoid 
            }
        }).then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});

router.delete('/sys/systemproject/:sysoid', function (req, res) {
    models.systemproject.destroy({ where: { sysoid: req.params.sysoid }})
    .then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});
router.p
module.exports = router;