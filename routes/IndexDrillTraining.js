var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getTraining', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    var products = {
        "total":5,
        "pageno":"ok",
        "items":[
            {
                title1:"零基础适应性训练",
                title2:"还未进行过训练",
                "number":"21分钟·k1"
            },
            {
                title1:"核心功能入门",
                title2:"还未进行过训练",
                "number":"14分钟·k1"
            },
            {
                title1:"深蹲入门",
                title2:"还未进行过训练",
                "number":"11分钟·k1"
            },
            {
                title1:"俯卧撑入门",
                title2:"还未进行过训练",
                "number":"14分钟·k1"
            },
            {
                title1:"腹肌训练入门",
                title2:"还未进行过训练",
                "number":"15分钟·k1"
            }
        ]
    } ;

    res.jsonp(products)

});

module.exports = router;