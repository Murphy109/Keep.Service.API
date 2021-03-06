var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getRecommend', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");


    var products = {
        "total":5,
        "pageno":"ok",
        "items":["http://localhost:3000/img/recommend_sport1.png",
            "http://localhost:3000/img/recommend_sport2.png",
            "http://localhost:3000/img/recommend_sport3.png"
        ]
    } ;

    res.jsonp(products)

});

module.exports = router;