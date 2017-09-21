var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");

// router.get('/sys/question', function (req, res) {
//     models.question.findAll({ 
//         where: { $or: [{mtoid: 3 },{mtoid:4 }] }}).then(function (result) {
//         publicResource.ReturnResult(res, result);
//     });
// });
router.get('/sys/question', function (req, res) {
    var sequelize = connection.open();
   var query = "SELECT question.quoid, question.qucode, question.ququestion, question.mtoid, question.meoid, question.tqoid, question.optionquestion, question.reqsystem, question.quimage, role.rooid, role.rodescription FROM public.question, public.subdimension, public.rolesubdimension, public.role WHERE question.suoid = subdimension.suoid AND subdimension.suoid = rolesubdimension.suoid AND rolesubdimension.rooid = role.rooid";
   sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
 .then(function (result) {
     publicResource.ReturnResult(res, result);
 })
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