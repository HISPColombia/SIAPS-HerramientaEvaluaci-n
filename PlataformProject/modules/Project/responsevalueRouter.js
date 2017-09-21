var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/responsevalue/chars/:proid', function (req, res) {
     var sequelize = connection.open();
     var query = "SELECT question.ququestion, responsevalue.rvoid, responsevalue.proid, question.optionquestion, responsevalue.rvdate, typequestion.tqdescription,responsevalue.rvresp, public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp) AS qualify FROM public.responsevalue, public.question, public.typequestion WHERE responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid and responsevalue.proid = "+req.params.proid +" ORDER BY responsevalue.quoid DESC";
     sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
    .then(function (result) {
       publicResource.ReturnResult(res, result);
   })
});

router.get('/sys/responsevalue/subdimension/:sd/:proid', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT "+  
    "question.ququestion,"+
    "responsevalue.proid,"+
    "question.optionquestion,"+
    "responsevalue.rvdate,"+
    "typequestion.tqdescription,"+
    "responsevalue.rvresp,"+
    "public.subdimension.suoid,"+
    "public.subdimension.suname,"+
    "public.dimension.dioid,"+
    "public.dimension.diname, "+
    "public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp) AS qualify FROM "+
    "responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid)"+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid)"+
    "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid)"+
    "INNER JOIN public.subdimension ON (question.suoid = public.subdimension.suoid)"+
    "INNER JOIN public.dimension ON (public.subdimension.dioid = public.dimension.dioid) WHERE "+
    "responsevalue.tqoid = typequestion.tqoid AND "+
    "question.quoid = responsevalue.quoid AND "+
    "question.suoid = "+req.params.sd+" AND responsevalue.proid = "+req.params.proid;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});
router.get('/sys/responsevalue/dimension/:dm/:proid', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT "+  
    "question.ququestion,"+
    "responsevalue.proid,"+
    "question.optionquestion,"+
    "responsevalue.rvdate,"+
    "typequestion.tqdescription,"+
    "responsevalue.rvresp,"+
    "public.subdimension.suoid,"+
    "public.subdimension.suname,"+
    "public.dimension.dioid,"+
    "public.dimension.diname, "+
    "public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp) AS qualify FROM "+
    "responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid)"+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid)"+
    "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid)"+
    "INNER JOIN public.subdimension ON (question.suoid = public.subdimension.suoid)"+
    "INNER JOIN public.dimension ON (public.subdimension.dioid = public.dimension.dioid) WHERE "+
    "responsevalue.tqoid = typequestion.tqoid AND "+
    "question.quoid = responsevalue.quoid AND "+
    "dimension.dioid = "+req.params.dm+" AND responsevalue.proid = "+req.params.proid;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});
router.get('/sys/responsevalue/feature/:fe/:proid', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT "+
    "question.ququestion, "+
    "responsevalue.proid, "+
    "question.optionquestion, "+
    "responsevalue.rvdate, "+
    "typequestion.tqdescription, "+
    "responsevalue.rvresp, "+
    "metric.meoid, "+
    "metric.mename, "+
    "attribute.atname, "+
    "attribute.atoid, "+
    "subfeature.sfoid, "+
    "subfeature.sfname, "+
    "feature.feoid, "+
    "feature.fename, "+
    "public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp) AS qualify FROM responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid) "+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
    "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) "+
    "INNER JOIN metric ON (question.meoid = metric.meoid) "+
    "INNER JOIN attribute ON (metric.atoid = attribute.atoid) "+
    "INNER JOIN subfeature ON (attribute.sfoid = subfeature.sfoid) "+
    "INNER JOIN feature ON (subfeature.feoid = feature.feoid) WHERE "+
    "responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid and feature.feoid = "+req.params.fe+" AND responsevalue.proid = "+req.params.proid;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/responsevalue/subfeature/:sfe/:proid', function (req, res) {
    var sequelize = connection.open();
    var query = "SELECT "+
    "question.ququestion, "+
    "responsevalue.proid, "+
    "question.optionquestion, "+
    "responsevalue.rvdate, "+
    "typequestion.tqdescription, "+
    "responsevalue.rvresp, "+
    "metric.meoid, "+
    "metric.mename, "+
    "attribute.atname, "+
    "attribute.atoid, "+
    "subfeature.sfoid, "+
    "subfeature.sfname, "+
    "feature.feoid, "+
    "feature.fename "+
    "public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp) AS qualify FROM responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid) "+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
    "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) "+
    "INNER JOIN metric ON (question.meoid = metric.meoid) "+
    "INNER JOIN attribute ON (metric.atoid = attribute.atoid) "+
    "INNER JOIN subfeature ON (attribute.sfoid = subfeature.sfoid) "+
    "INNER JOIN feature ON (subfeature.feoid = feature.feoid) WHERE "+
    "responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid and subfeature.sfoid = "+req.params.sfe+" AND responsevalue.proid = "+req.params.proid;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});
router.get('/sys/qualifidimension/:proid', function (req, res) {
    var sequelize = connection.open();
   var query = " SELECT public.dimension.diname as name, avg(qualify(public.typequestion.tqdescription, public.question.optionquestion, public.responsevalue.rvresp)) AS item FROM responsevalue "+
   "INNER JOIN project ON (responsevalue.proid = project.proid) INNER JOIN question ON (responsevalue.quoid = question.quoid) INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) INNER JOIN public.subdimension ON (question.suoid = public.subdimension.suoid) INNER JOIN public.dimension ON (public.subdimension.dioid = public.dimension.dioid) "+
   "WHERE responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid AND responsevalue.proid = "+req.params.proid+" GROUP BY public.dimension.dioid";
   sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
 .then(function (result) {
     publicResource.ReturnResult(res, result);
 })
});
router.get('/sys/qualifisubdimension/:proid', function (req, res) {
    var sequelize = connection.open();
   var query = " SELECT public.subdimension.suname as name, avg(qualify(public.typequestion.tqdescription, public.question.optionquestion, public.responsevalue.rvresp)) AS item FROM responsevalue "+
   "INNER JOIN project ON (responsevalue.proid = project.proid) INNER JOIN question ON (responsevalue.quoid = question.quoid) INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) INNER JOIN public.subdimension ON (question.suoid = public.subdimension.suoid) INNER JOIN public.dimension ON (public.subdimension.dioid = public.dimension.dioid) "+
   "WHERE responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid AND responsevalue.proid = "+req.params.proid+" GROUP BY public.subdimension.suoid";
   sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
 .then(function (result) {
     publicResource.ReturnResult(res, result);
 })
});
router.get('/sys/qualififeature/:proid', function (req, res) {
    var sequelize = connection.open();
   var query = 	"SELECT "+
   "feature.fename as name, "+
   "avg(public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp)) AS item FROM responsevalue "+
   "INNER JOIN project ON (responsevalue.proid = project.proid) "+
   "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
   "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) "+
   "INNER JOIN metric ON (question.meoid = metric.meoid) "+
   "INNER JOIN attribute ON (metric.atoid = attribute.atoid) "+
   "INNER JOIN subfeature ON (attribute.sfoid = subfeature.sfoid) "+
   "INNER JOIN feature ON (subfeature.feoid = feature.feoid) WHERE "+
   "responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid AND responsevalue.proid = "+req.params.proid+" GROUP BY public.feature.feoid";
   sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
 .then(function (result) {
     publicResource.ReturnResult(res, result);
 })
});
router.get('/sys/qualifisubfeature/:proid', function (req, res) {
    var sequelize = connection.open();
   var query = 	"SELECT "+
   "subfeature.sfname as name, "+
   "avg(public.Qualify(typequestion.tqdescription, question.optionquestion, responsevalue.rvresp)) AS item FROM responsevalue "+
   "INNER JOIN project ON (responsevalue.proid = project.proid) "+
   "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
   "INNER JOIN typequestion ON (question.tqoid = typequestion.tqoid) "+
   "INNER JOIN metric ON (question.meoid = metric.meoid) "+
   "INNER JOIN attribute ON (metric.atoid = attribute.atoid) "+
   "INNER JOIN subfeature ON (attribute.sfoid = subfeature.sfoid) "+
   "INNER JOIN feature ON (subfeature.feoid = feature.feoid) WHERE "+
   "responsevalue.tqoid = typequestion.tqoid AND question.quoid = responsevalue.quoid AND responsevalue.proid = "+req.params.proid+" GROUP BY public.subfeature.sfoid";
   sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
 .then(function (result) {
     publicResource.ReturnResult(res, result);
 })
});
router.get('/sys/responsevalue/dimensiondonut/:dm/:proid', function (req, res) {
    var sequelize = connection.open();
    var query ="SELECT public.system.sysname as name, count(public.system.sysname) AS item FROM responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid) "+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
    "INNER JOIN public.subdimension ON (question.suoid = public.subdimension.suoid) "+
    "INNER JOIN public.dimension ON (public.subdimension.dioid = public.dimension.dioid) "+
    "INNER JOIN public.systemproject ON (public.systemproject.proid = project.proid) "+
    "INNER JOIN public.system ON (public.systemproject.sysoid = public.system.sysoid) WHERE question.quoid = responsevalue.quoid AND "+
    "dimension.dioid = "+req.params.dm+" AND responsevalue.proid = "+req.params.proid+
    " GROUP BY public.system.sysname";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});
router.get('/sys/responsevalue/featuredonut/:fe/:proid', function (req, res) {
    var sequelize = connection.open();
    var query ="SELECT system1.sysname as name, COUNT(system1.sysname) AS item FROM  responsevalue "+
    "INNER JOIN project ON (responsevalue.proid = project.proid) "+
    "INNER JOIN question ON (responsevalue.quoid = question.quoid) "+
    "INNER JOIN metric ON (question.meoid = metric.meoid) "+
    "INNER JOIN attribute ON (metric.atoid = attribute.atoid) "+
    "INNER JOIN subfeature ON (attribute.sfoid = subfeature.sfoid) "+
    "INNER JOIN feature ON (subfeature.feoid = feature.feoid), "+
    "public.system system1 INNER JOIN public.systemproject ON (system1.sysoid = public.systemproject.sysoid) "+
    "INNER JOIN public.system ON (public.systemproject.sysoid = public.system.sysoid) WHERE  "+
    "question.quoid = responsevalue.quoid AND responsevalue.proid = "+req.params.proid +"AND feature.feoid="+req.params.fe +
    " GROUP BY system1.sysname";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
   .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});


router.get('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            rvoid: req.params.rvoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/proid/:proid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/user/:usoid', function (req, res) {//listar los proyectos que son del usuario con el filtro de rol y usuario
    models.responsevalue.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/sys/:sysoid', function (req, res) {//listar los proyectos que son del usuario con el filtro de rol y usuario
    models.responsevalue.findAll({ 
        where: {
            sysoid: req.params.sysoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/responsevalue', function (req, res) {
    models.responsevalue.create({ rvoid:req.body.rvoid, faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, proid: req.body.proid, quoid: req.body.quoid, rvdate: req.body.rvdate, rvresp: req.body.rvresp, sysoid: req.body.sysoid, tqoid: req.body.tqoid, usoid: req.body.usoid })
   .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.put('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.update({ faoidsource: req.body.faoidsource, faoiddestination: req.body.faoiddestination, proid: req.body.proid, quoid: req.body.quoid, rvdate: req.body.rvdate, rvresp: req.body.rvresp, sysoid: req.body.sysoid, tqoid: req.body.tqoid, usoid: req.body.usoid },
    { 
        where: {
             rvoid: req.params.rvoid 
            }
        }).then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.delete('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.destroy({ where: { rvoid: req.params.rvoid }})
    .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});
router.p
module.exports = router;
