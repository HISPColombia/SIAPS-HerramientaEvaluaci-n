var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();

router.get('/sys/question', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{mtoid: 3 },{mtoid:4 }] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/question/:quoid', function (req, res) {
    models.question.findAll({ 
        where: { quoid: req.params.quoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/question/nam/:name', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{qucode: {$like: '%'+req.params.name+'%'}},{ququestion: {like: '%'+ req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/question/fkmtoid/:mtoid', function (req, res) {
    models.question.findAll({ 
        where: { mtoid: req.params.mtoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/question/fkfeoid/:feoid', function (req, res) {
    models.question.findAll({ 
        where: { feoid: req.params.feoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/question', function (req, res) {
    models.question.create({ quoid: req.body.quoid, qucode: req.body.qucode, ququestion: req.body.ququestion, mtoid: req.body.mtoid,meoid: req.body.meoid, tqoid: req.body.tqoid, optionquestion: req.body.optionquestion, reqsystem: req.body.reqsystem })
   .then(function (question) {
       publicResource.ReturnResult(res, question);
   })
});

router.put('/sys/question/:quoid', function (req, res) {
  models.question.update({ qucode: req.body.qucode, ququestion: req.body.ququestion, mtoid: req.body.mtoid,meoid: req.body.meoid, tqoid: req.body.tqoid, optionquestion: req.body.optionquestion, reqsystem: req.body.reqsystem },
    { 
        where: {
             quoid: req.params.quoid 
            }
        }).then(function (question) {
       publicResource.ReturnResult(res, question);
   })
});

router.delete('/sys/question/:quoid', function (req, res) {
    models.question.destroy({ where: { quoid: req.params.quoid }})
    .then(function (question) {
       publicResource.ReturnResult(res, question);
   })
});
router.p
module.exports = router;