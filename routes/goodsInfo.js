var express = require('express');
var router = express.Router();


router.get('/getGoodsInfo', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    var goodsInfo = [
            {
                "picUrl":"http://localhost:3000/img/clothes_banner1.png",
                "title":"Keep | 2017男子训练T恤",
                "color":"黑色",
                "size":"L",
                "price":99,
                "qal":3
            },
            {
                "picUrl":"http://localhost:3000/img/clothes_banner1.png",
                "title":"Keep | 2017男子训练T恤",
                "color":"黑色",
                "size":"L",
                "price":99,
                "qal":3
            },
            {
                "picUrl":"http://localhost:3000/img/clothes_banner1.png",
                "title":"Keep | 2017经典LOGO印花T恤 自律系列 男款",
                "color":"白色",
                "size":"L",
                "price":199,
                "qal":2
            },
            {
                "picUrl":"http://localhost:3000/img/clothes_banner1.png",
                "title":"Keep | 高强度肩带运动内衣",
                "color":"黑色",
                "size":"s",
                "price":249,
                "qal":1
            }
        ]

    res.jsonp(goodsInfo);
});

module.exports = router;
