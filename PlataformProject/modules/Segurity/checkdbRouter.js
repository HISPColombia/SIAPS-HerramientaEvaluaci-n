var connect = require("../../ConnectionDB.js");
var sequelize = connect.open();

var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

router.get('/sys/checkdb', function (req, res) {
   var querySQL = "SELECT relname,reltuples::integer FROM pg_class C LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace) WHERE nspname NOT IN ("+"'"+"pg_catalog"+"'"+","+"'"+"information_schema"+"'"+") AND relkind="+"'"+"r"+"'"+" ORDER BY reltuples DESC";
    console.log(querySQL);
    sequelize.query(querySQL,
          { type: sequelize.QueryTypes.SELECT }).then(function (tenant) {
        publicResource.ReturnResult(res, tenant);
    })
});

module.exports = router;