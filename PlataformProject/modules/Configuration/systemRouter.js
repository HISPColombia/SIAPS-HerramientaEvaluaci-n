var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/system', function (req, res) {
    models.system.findAll({ limit: 1000, order: '"sysoid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/system/:sysoid', function (req, res) {
    models.system.findAll({ 
        where: { sysoid: req.params.sysoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/system/sysDescription/:sysDescription', function (req, res) {
    models.system.findAll({ 
        where: { $or: [{sysDescription: {$like: '%'+req.params.sysDescription+'%'}},{qusystem: {like: '%'+ req.params.sysDescription+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

// router.post('/sys/system', function (req, res) {
//     models.system.create({ sysoid: req.body.sysoid, sysDescription: req.body.sysDescription, initials: req.body.initials })
//    .then(function (system) {
//        publicResource.ReturnResult(res, system);
//    })
// });
router.post('/sys/system', function (req, res) {
    models.system.create({ sysname: req.body.sysname, initials: req.body.initials })
   .then(function (system) {
       publicResource.ReturnResult(res, system);
   })
});

router.put('/sys/system/:sysoid', function (req, res) {
  models.system.update({sysoid:req.body.sysoid, sysname: req.body.sysname, initials: req.body.initials  },
    { 
        where: {
             sysoid: req.params.sysoid 
            }
        }).then(function (system) {
       publicResource.ReturnResult(res, system);
   })
});

router.delete('/sys/system/:sysoid', function (req, res) {
    models.system.destroy({ where: { sysoid: req.params.sysoid }})
    .then(function (system) {
       publicResource.ReturnResult(res, system);
   })
});
router.p
module.exports = router;