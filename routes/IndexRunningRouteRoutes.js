var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getRoutes', function(req, res) {
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
                title1:"唐城墙遗址公园",
                title2:"全长2.29公里855人打卡",
                "number":"距离1.4公里"
            },
            {
                title1:"西安外事学院南校区田径场",
                title2:"全长0.40公里373人打卡",
                "number":"距离1.5公里"
            },
            {
                title1:"西安电子科技大学北校区田径场",
                title2:"全长0.40公里2326人打卡",
                "number":"距离4.3公里"
            }
        ]
    } ;

    res.jsonp(products)

});

module.exports = router;