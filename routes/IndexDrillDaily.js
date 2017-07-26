var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getDaily', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    var products = {
        "total":1,
        "pageno":"ok",
        "items":[
            {
                title:"Keep 日报",
                title1:"37岁上电视秀比基尼，她的前半生才叫[姿态]",
                title2:"健身至于我们，也是一种不死的欲望，是疲惫生活的英雄梦想。",
                "url":"http://localhost:3000/img/daily1.png"
            }
        ]
    } ;

    res.jsonp(products)

});

module.exports = router;