var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var middleware = require('../../config/middleware.js');
var router = express.Router();


router.get('/sys/audit', function (req, res) {
    models.tbl_audit.findAll({ order: '"pk_audit" ASC' }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
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

router.get('/sys/version', function (req, res) {
    models.tbl_audit.findOne({ order: '"pk_audit" DESC' }).then(function (result) {
        publicResource.ReturnResult(res, result.pk_audit);
    });
});

router.p
module.exports = router;
