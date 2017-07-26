var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getBanner', function(req, res) {
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
                title:"周一",
                "number":"2.12"
            },
            {
                title:"周二",
                "number":"1.12"
            },
            {
                title:"周三",
                "number":"0.52"
            },
            {
                title:"周四",
                "number":"2.52"
            },
            {
                title:"周五",
                "number":"2.0"
            },
            {
                title:"周六",
                "number":"1.5"
            },
            {
                title:"周日",
                "number":"2.12"
            }
        ]
    } ;

    res.jsonp(products)

});

module.exports = router;