var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var middleware = require('../../config/middleware.js');
var router = express.Router();
var connection = require("../../ConnectionDB.js");


router.get('/sys/audit', function (req, res) {
    var sequelize = connection.open();
    //SELECT tbl_audit."TableName", count(tbl_audit."TableName") as Version FROM public.tbl_audit group by tbl_audit."TableName" order by tbl_audit."TableName" asc;
    var query = "SELECT tbl_audit.TableName, count(tbl_audit.TableName) as Version FROM public.tbl_audit group by tbl_audit.TableName order by tbl_audit.TableName asc;";
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
  .then(function (result) {
      publicResource.ReturnResult(res, result);
  })
});

router.get('/sys/audit/:pk_audit', function (req, res) {
    models.tbl_audit.findAll({ 
        where: { pk_audit: req.params.pk_audit }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/audit/table/:table', function (req, res) {
    models.tbl_audit.findAll({ 
        where: { TableName: req.params.table }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

// router.get('/sys/auditversion', function (req, res) {//Listar la tabla y la version en que va
//     models.tbl_audit.findOne({ order: '"pk_audit" DESC' }).then(function (result) {
//         publicResource.ReturnResult(res, result.pk_audit);
//     });
// });

router.p
module.exports = router;
