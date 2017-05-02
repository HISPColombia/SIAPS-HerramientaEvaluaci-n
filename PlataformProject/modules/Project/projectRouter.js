var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/systemproject/:proid', function (req, res) {
     var sequelize = connection.open();
    var query = "SELECT project.proid, project.prname,systemproject.sysoid, system.sysname, system.initials FROM public.system, public.systemproject, public.project WHERE system.sysoid = systemproject.sysoid AND project.proid = systemproject.proid AND project.proid = "+req.params.proid;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});


router.get('/sys/project', function (req, res) {
    models.project.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/project/id/:proid', function (req, res) {
    models.project.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/project/:prstatus', function (req, res) {
    models.project.findAll({ 
        where: {
            prstatus: req.params.prstatus }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/project/nam/:name', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{prname: {$like: '%'+req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/project', function (req, res) {
    models.project.create({ proid: req.body.proid, prname: req.body.prname, prstatus: req.body.prstatus, prdateend: req.body.prdateend, meoid: req.body.meoid })
   .then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});

router.put('/sys/project/:proid', function (req, res) {
    models.project.update({  prname: req.body.prname, prstatus: req.body.prstatus, prdateend: req.body.prdateend, meoid: req.body.meoid  },
    { 
        where: {
             proid: req.params.proid 
            }
        }).then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});

router.delete('/sys/project/:proid', function (req, res) {
    models.project.destroy({ where: { proid: req.params.proid }})
    .then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});
router.p
module.exports = router;
