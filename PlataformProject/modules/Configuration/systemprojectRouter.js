var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/systemproject', function (req, res) {
    models.systemproject.findAll({ limit: 1000, order: '"sysproid" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/systemproject/:sysproid', function (req, res) {
    models.systemproject.findAll({ 
        where: { sysproid: req.params.sysproid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/systemproject', function (req, res) {
    models.systemproject.create({ sysoid: req.body.sysoid, proid: req.body.proid })
   .then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});

router.put('/sys/systemproject/:sysproid', function (req, res) {
  models.systemproject.update({ proid: req.body.proid, sysoid: req.body.sysoid },
    { 
        where: {
             sysproid: req.params.sysproid 
            }
        }).then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});

router.delete('/sys/systemproject/:sysproid', function (req, res) {
    models.systemproject.destroy({ where: { sysproid: req.params.sysproid }})
    .then(function (systemproject) {
       publicResource.ReturnResult(res, systemproject);
   })
});
router.p
module.exports = router;