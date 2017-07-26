
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/GetStatus', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var StatusMsg = {
        "Items":[
            {
                "imgUrl":"http://localhost:3000/img/hot_news1.png",
                "tittle":"好久没有上Keep 但是健身没有停止 最近刷脂很成功",
                "imgUser":"http://localhost:3000/img/small1.png",
                "userName":"-Giselle",
                "count":"456"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news2.png",
                "tittle":"#热汗行动# #召唤腹肌来傍身####",
                "imgUser":"http://localhost:3000/img/small2.png",
                "userName":"Lily一名化妆师",
                "count":"626"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news3.png",
                "tittle":"#按照计划今天是练胳膊，俯身臂屈伸，站姿三头肌伸展",
                "imgUser":"http://localhost:3000/img/small3.png",
                "userName":"李夕玲Celine",
                "count":"5426"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news4.png",
                "tittle":"第一次在KEEP上发小视频，今天全集拍打虐腹",
                "imgUser":"http://localhost:3000/img/small4.png",
                "userName":"milky韩",
                "count":"59"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news5.png",
                "tittle":"旧照记己鼓励记己",
                "imgUser":"http://localhost:3000/img/small5.png",
                "userName":"FeierGOGOGO",
                "count":"2.2k"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news6.png",
                "tittle":"#Keep视频模仿秀##早安keeper们#",
                "imgUser":"http://localhost:3000/img/small6.png",
                "userName":"JustinKitty",
                "count":"4986"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news6.png",
                "tittle":"#Keep视频模仿秀##早安keeper们#",
                "imgUser":"http://localhost:3000/img/small6.png",
                "userName":"JustinKitty",
                "count":"4986"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news1.png",
                "tittle":"好久没有上Keep 但是健身没有停止 最近刷脂很成功",
                "imgUser":"http://localhost:3000/img/small1.png",
                "userName":"-Giselle",
                "count":"456"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news2.png",
                "tittle":"#热汗行动# #召唤腹肌来傍身####",
                "imgUser":"http://localhost:3000/img/small2.png",
                "userName":"Lily一名化妆师",
                "count":"626"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news3.png",
                "tittle":"#按照计划今天是练胳膊，俯身臂屈伸，站姿三头肌伸展",
                "imgUser":"http://localhost:3000/img/small3.png",
                "userName":"李夕玲Celine",
                "count":"5426"
            },
            {
                "imgUrl":"http://localhost:3000/img/hot_news4.png",
                "tittle":"第一次在KEEP上发小视频，今天全集拍打虐腹",
                "imgUser":"http://localhost:3000/img/small4.png",
                "userName":"milky韩",
                "count":"59"
            }
        ]
    };
    res.jsonp(StatusMsg);
});

module.exports = router;

